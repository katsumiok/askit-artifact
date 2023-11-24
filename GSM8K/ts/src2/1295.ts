import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1295.json')) {
        console.log("Skipping 1295")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ryan’s allowance is $6 each week he completes his chores. He did his chores for {{x1}} weeks. Then he bought ice cream cones for himself and {{x2}} friends at $1.25 each. Now they all want to go to the movies and tickets cost $6.50 each. How many movie tickets can Ryan buy?', [], [{'input': {'x1': 3, 'x2': 3}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1295,
        "question": 'Ryan’s allowance is $6 each week he completes his chores. He did his chores for 3 weeks. Then he bought ice cream cones for himself and 3 friends at $1.25 each. Now they all want to go to the movies and tickets cost $6.50 each. How many movie tickets can Ryan buy?',
        "answer": 2,
        "examples": [{'input': {'x1': 3, 'x2': 3}, 'output': 2}],
        });
    fs.writeFileSync('json2/1295.json', json);
}
doit();
