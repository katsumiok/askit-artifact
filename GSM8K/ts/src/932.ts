import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/932.json')) {
        console.log("Skipping 932")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Maria invited {{x1}} of her friends over for a water balloon fight in the backyard. At the start of the game, Maria gave each of her friends {{x2}} water balloons. She had one water balloon for herself.  Then her mom came out and gave each person {{x3}} more balloons.  How many total balloons did the girls have?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 3}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 932,
        "question": 'Maria invited 4 of her friends over for a water balloon fight in the backyard. At the start of the game, Maria gave each of her friends 2 water balloons. She had one water balloon for herself.  Then her mom came out and gave each person 3 more balloons.  How many total balloons did the girls have?',
        "answer": 24,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 3}, 'output': 24}],
        });
    fs.writeFileSync('json/932.json', json);
}
doit();
