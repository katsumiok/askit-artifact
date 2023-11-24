import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1236.json')) {
        console.log("Skipping 1236")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Madeline ate {{x1}} grapes. Her brother wanted to make grape juice and used up {{x2}} times as many grapes then Madeline to make a full glass. Their mother then used the remaining grapes to make {{x3}} pies. How many grapes were there at the beginning if the pie recipe calls for {{x4}} grapes per pie?', [], [{'input': {'x1': 6, 'x2': 5, 'x3': 4, 'x4': 12}, 'output': 84}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 5, 'x3': 4, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 84;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1236,
        "question": 'Madeline ate 6 grapes. Her brother wanted to make grape juice and used up 5 times as many grapes then Madeline to make a full glass. Their mother then used the remaining grapes to make 4 pies. How many grapes were there at the beginning if the pie recipe calls for 12 grapes per pie?',
        "answer": 84,
        "examples": [{'input': {'x1': 6, 'x2': 5, 'x3': 4, 'x4': 12}, 'output': 84}],
        });
    fs.writeFileSync('json2/1236.json', json);
}
doit();
