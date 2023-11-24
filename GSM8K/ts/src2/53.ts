import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/53.json')) {
        console.log("Skipping 53")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("A mechanic charges different rates to repair the tires of trucks and cars.  For each truck tire that is repaired, the mechanic will charge $60 and for each car tire that is repaired, the mechanic will charge $40.  On Thursday, the mechanic repairs {{x1}} truck tires and {{x2}} car tires.  On Friday, the mechanic repairs {{x3}} car tries and doesn't repair any truck tires.  How much more revenue did the mechanic earn on the day with higher revenue?", [], [{'input': {'x1': 6, 'x2': 4, 'x3': 12}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 53,
        "question": "A mechanic charges different rates to repair the tires of trucks and cars.  For each truck tire that is repaired, the mechanic will charge $60 and for each car tire that is repaired, the mechanic will charge $40.  On Thursday, the mechanic repairs 6 truck tires and 4 car tires.  On Friday, the mechanic repairs 12 car tries and doesn't repair any truck tires.  How much more revenue did the mechanic earn on the day with higher revenue?",
        "answer": 40,
        "examples": [{'input': {'x1': 6, 'x2': 4, 'x3': 12}, 'output': 40}],
        });
    fs.writeFileSync('json2/53.json', json);
}
doit();
