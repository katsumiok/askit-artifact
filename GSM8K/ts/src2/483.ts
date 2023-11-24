import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/483.json')) {
        console.log("Skipping 483")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Gabriel and Luri each own a portable media player that can store up to {{x1}} songs. Gabriel has {{x2}} songs on his player while Luri has {{x3}} times as many songs. How many fewer songs can Luri add to his player than Gabriel can add to his?', [], [{'input': {'x1': 100, 'x2': 20, 'x3': 3}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 20, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 483,
        "question": 'Gabriel and Luri each own a portable media player that can store up to 100 songs. Gabriel has 20 songs on his player while Luri has 3 times as many songs. How many fewer songs can Luri add to his player than Gabriel can add to his?',
        "answer": 40,
        "examples": [{'input': {'x1': 100, 'x2': 20, 'x3': 3}, 'output': 40}],
        });
    fs.writeFileSync('json2/483.json', json);
}
doit();
