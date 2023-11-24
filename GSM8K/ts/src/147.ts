import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/147.json')) {
        console.log("Skipping 147")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Debra is monitoring a beehive to see how many bees come and go in a day. She sees {{x1}} bees leave the hive in the first {{x2}} hours, and then she sees 1/2 that many bees return in the next {{x3}} hours. She sees two times as many bees as she saw first leave the hive fly from the hive and leave in the next {{x4}} hours. Then every bee that left before that hadn't already returned returns to the hive in the next {{x5}} hours. How many bees did Debra see return to the hive in the last {{x6}} hours of the day?", [], [{'input': {'x1': 30, 'x2': 6, 'x3': 6, 'x4': 6, 'x5': 6, 'x6': 6}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 6, 'x3': 6, 'x4': 6, 'x5': 6, 'x6': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 147,
        "question": "Debra is monitoring a beehive to see how many bees come and go in a day. She sees 30 bees leave the hive in the first 6 hours, and then she sees 1/2 that many bees return in the next 6 hours. She sees two times as many bees as she saw first leave the hive fly from the hive and leave in the next 6 hours. Then every bee that left before that hadn't already returned returns to the hive in the next 6 hours. How many bees did Debra see return to the hive in the last 6 hours of the day?",
        "answer": 75,
        "examples": [{'input': {'x1': 30, 'x2': 6, 'x3': 6, 'x4': 6, 'x5': 6, 'x6': 6}, 'output': 75}],
        });
    fs.writeFileSync('json/147.json', json);
}
doit();
