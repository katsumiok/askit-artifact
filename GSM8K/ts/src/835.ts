import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/835.json')) {
        console.log("Skipping 835")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If it takes {{x1}} kangaroos traveling at the same speed a total of {{x2}} hours to travel across a highway, how many hours will it take four turtles, each traveling at half the speed of a kangaroo, to do so?', [], [{'input': {'x1': 3, 'x2': 18}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 835,
        "question": 'If it takes 3 kangaroos traveling at the same speed a total of 18 hours to travel across a highway, how many hours will it take four turtles, each traveling at half the speed of a kangaroo, to do so?',
        "answer": 48,
        "examples": [{'input': {'x1': 3, 'x2': 18}, 'output': 48}],
        });
    fs.writeFileSync('json/835.json', json);
}
doit();
