import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/771.json')) {
        console.log("Skipping 771")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Bennet is a farmer. He sells {{x1}} of his eggplants for $3 each. He has {{x2}} ears of corn that he can sell as well. If Bennet wants to make a total of $135, how much should he sell each ear of corn for?', [], [{'input': {'x1': 20, 'x2': 25}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 771,
        "question": 'Bennet is a farmer. He sells 20 of his eggplants for $3 each. He has 25 ears of corn that he can sell as well. If Bennet wants to make a total of $135, how much should he sell each ear of corn for?',
        "answer": 3,
        "examples": [{'input': {'x1': 20, 'x2': 25}, 'output': 3}],
        });
    fs.writeFileSync('json2/771.json', json);
}
doit();
