import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/876.json')) {
        console.log("Skipping 876")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Amy is taking a history test. She correctly answers 80% of the multiple-choice questions, 90% of the true/false questions, and 60% of the long-answer questions. The multiple-choice and true/false questions are worth {{x1}} point each, and the long answer questions are worth {{x2}} points each. How many points does Amy score if there are {{x3}} multiple-choice questions, {{x4}} true/false questions, and {{x5}} long answer questions?', [], [{'input': {'x1': 1, 'x2': 5, 'x3': 10, 'x4': 20, 'x5': 5}, 'output': 41}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 5, 'x3': 10, 'x4': 20, 'x5': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 41;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 876,
        "question": 'Amy is taking a history test. She correctly answers 80% of the multiple-choice questions, 90% of the true/false questions, and 60% of the long-answer questions. The multiple-choice and true/false questions are worth 1 point each, and the long answer questions are worth 5 points each. How many points does Amy score if there are 10 multiple-choice questions, 20 true/false questions, and 5 long answer questions?',
        "answer": 41,
        "examples": [{'input': {'x1': 1, 'x2': 5, 'x3': 10, 'x4': 20, 'x5': 5}, 'output': 41}],
        });
    fs.writeFileSync('json2/876.json', json);
}
doit();
