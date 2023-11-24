import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/224.json')) {
        console.log("Skipping 224")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carlos and Benji are at the beach. Carlos rents a canoe for $30 an hour and Benji rents a banana boat raft for $18 an hour. If Carlos uses the boat for {{x1}} hours and Benji uses the raft for {{x2}} hours, how much will they pay for their rentals, altogether?', [], [{'input': {'x1': 3, 'x2': 5}, 'output': 180}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 224,
        "question": 'Carlos and Benji are at the beach. Carlos rents a canoe for $30 an hour and Benji rents a banana boat raft for $18 an hour. If Carlos uses the boat for 3 hours and Benji uses the raft for 5 hours, how much will they pay for their rentals, altogether?',
        "answer": 180,
        "examples": [{'input': {'x1': 3, 'x2': 5}, 'output': 180}],
        });
    fs.writeFileSync('json2/224.json', json);
}
doit();
