import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/274.json')) {
        console.log("Skipping 274")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("It's April, and Mrs. Rylan has been busy on her farm planting different types of vegetables for the season. She has bought {{x1}} packets of tomato seeds and {{x2}} packets of celery seeds to plant. If a packet of tomato seeds costs $40 and a packet of celery seeds costs $30, how much money did she use to buy the seeds?", [], [{'input': {'x1': 20, 'x2': 80}, 'output': 3200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 274,
        "question": "It's April, and Mrs. Rylan has been busy on her farm planting different types of vegetables for the season. She has bought 20 packets of tomato seeds and 80 packets of celery seeds to plant. If a packet of tomato seeds costs $40 and a packet of celery seeds costs $30, how much money did she use to buy the seeds?",
        "answer": 3200,
        "examples": [{'input': {'x1': 20, 'x2': 80}, 'output': 3200}],
        });
    fs.writeFileSync('json2/274.json', json);
}
doit();
