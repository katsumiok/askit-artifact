import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/790.json')) {
        console.log("Skipping 790")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('At the trip to the county-level scavenger hunt competition, {{x1}} people were required to split into groups for the competition to begin. To break people up into smaller groups with different leaders, 9-person groups were formed. If 3/5 of the number of groups each had members bring back {{x2}} seashells each, how many seashells did they bring?', [], [{'input': {'x1': 90, 'x2': 2}, 'output': 108}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 90, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 108;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 790,
        "question": 'At the trip to the county-level scavenger hunt competition, 90 people were required to split into groups for the competition to begin. To break people up into smaller groups with different leaders, 9-person groups were formed. If 3/5 of the number of groups each had members bring back 2 seashells each, how many seashells did they bring?',
        "answer": 108,
        "examples": [{'input': {'x1': 90, 'x2': 2}, 'output': 108}],
        });
    fs.writeFileSync('json2/790.json', json);
}
doit();
