import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1007.json')) {
        console.log("Skipping 1007")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Two friends are playing pick-up sticks. While playing, they noticed that there are {{x1}} red sticks, and {{x2}} more blue sticks than red. Also, the number of yellow sticks is {{x3}} less than the blue sticks. How many sticks do they have?', [], [{'input': {'x1': 9, 'x2': 5, 'x3': 3}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1007,
        "question": 'Two friends are playing pick-up sticks. While playing, they noticed that there are 9 red sticks, and 5 more blue sticks than red. Also, the number of yellow sticks is 3 less than the blue sticks. How many sticks do they have?',
        "answer": 34,
        "examples": [{'input': {'x1': 9, 'x2': 5, 'x3': 3}, 'output': 34}],
        });
    fs.writeFileSync('json/1007.json', json);
}
doit();
