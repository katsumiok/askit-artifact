import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/814.json')) {
        console.log("Skipping 814")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A new arcade opens up and Jack decides to play with his {{x1}} friends.  Jack can play a game with {{x2}} quarter for {{x3}} minutes.  Two of his friends are significantly worse than him and can only play half as long.  One of them is significantly better and can play for 1.5 times as long.  They play for {{x4}} hours.  How much money is used?', [], [{'input': {'x1': 3, 'x2': 1, 'x3': 20, 'x4': 4}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 1, 'x3': 20, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 814,
        "question": 'A new arcade opens up and Jack decides to play with his 3 friends.  Jack can play a game with 1 quarter for 20 minutes.  Two of his friends are significantly worse than him and can only play half as long.  One of them is significantly better and can play for 1.5 times as long.  They play for 4 hours.  How much money is used?',
        "answer": 11,
        "examples": [{'input': {'x1': 3, 'x2': 1, 'x3': 20, 'x4': 4}, 'output': 11}],
        });
    fs.writeFileSync('json/814.json', json);
}
doit();
