import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/388.json')) {
        console.log("Skipping 388")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("James is in charge of running messages from the office to each teacher's classroom. If he delivers {{x1}} messages to Ms. Thompson and 1/3 as many messages to Mr. Yu, how many messages does he deliver total?", [], [{'input': {'x1': 66}, 'output': 88}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 66});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 88;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 388,
        "question": "James is in charge of running messages from the office to each teacher's classroom. If he delivers 66 messages to Ms. Thompson and 1/3 as many messages to Mr. Yu, how many messages does he deliver total?",
        "answer": 88,
        "examples": [{'input': {'x1': 66}, 'output': 88}],
        });
    fs.writeFileSync('json2/388.json', json);
}
doit();
