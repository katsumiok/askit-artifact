import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1183.json')) {
        console.log("Skipping 1183")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Two apples fell out of the tree, and one of them landed on Newton's head.  Newton picked up the two apples, put one in his pocket and threw the other apple into the tree, causing {{x1}} more apples to fall out of the tree.  Newton picked up these apples, put all but one in his pocket and threw the remaining one at the tree.  This caused another {{x2}} apples to fall out of the tree.  Newton picked up all of the remaining apples and went home to make a pie.  How many apples did he bring home?", [], [{'input': {'x1': 5, 'x2': 6}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 6});
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
        "id": 1183,
        "question": "Two apples fell out of the tree, and one of them landed on Newton's head.  Newton picked up the two apples, put one in his pocket and threw the other apple into the tree, causing 5 more apples to fall out of the tree.  Newton picked up these apples, put all but one in his pocket and threw the remaining one at the tree.  This caused another 6 apples to fall out of the tree.  Newton picked up all of the remaining apples and went home to make a pie.  How many apples did he bring home?",
        "answer": 11,
        "examples": [{'input': {'x1': 5, 'x2': 6}, 'output': 11}],
        });
    fs.writeFileSync('json/1183.json', json);
}
doit();
