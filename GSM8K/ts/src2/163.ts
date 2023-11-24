import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/163.json')) {
        console.log("Skipping 163")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('In a room, there are various toys: {{x1}} red cars, {{x2}} action figures, and a doll. The doll cost as much as {{x3}} action figures and one red car cost $4. How much are all toys worth, of an action figure costs $5?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 3}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 163,
        "question": 'In a room, there are various toys: 5 red cars, 3 action figures, and a doll. The doll cost as much as 3 action figures and one red car cost $4. How much are all toys worth, of an action figure costs $5?',
        "answer": 50,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 3}, 'output': 50}],
        });
    fs.writeFileSync('json2/163.json', json);
}
doit();
