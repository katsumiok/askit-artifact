import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/296.json')) {
        console.log("Skipping 296")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Each person in a certain household consumes 0.2 kg of rice every meal. Supposing {{x1}} members of the household eat rice every lunch and dinner, how many weeks will a {{x2}} kg bag of rice last?', [], [{'input': {'x1': 5, 'x2': 42}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 42});
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
        "id": 296,
        "question": 'Each person in a certain household consumes 0.2 kg of rice every meal. Supposing 5 members of the household eat rice every lunch and dinner, how many weeks will a 42 kg bag of rice last?',
        "answer": 3,
        "examples": [{'input': {'x1': 5, 'x2': 42}, 'output': 3}],
        });
    fs.writeFileSync('json2/296.json', json);
}
doit();
