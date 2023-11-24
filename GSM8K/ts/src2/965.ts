import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/965.json')) {
        console.log("Skipping 965")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("A bird decides to leave her summer home in the north and travel to her winter home in the south.  To make the journey, the bird leaves her home flying in a southerly direction for {{x1}} hours at a speed of {{x2}} miles per hour.  Then, the bird turns direction and flies towards the north for {{x3}} hours are a speed of {{x4}} miles per hour.  Finally, the bird changes direction and flies toward the south for {{x5}} hours at a speed of {{x6}} miles per hour before landing at her southern home.  What is the distance, in miles, between the bird's northern and the southern homes?", [], [{'input': {'x1': 10, 'x2': 30, 'x3': 2, 'x4': 18, 'x5': 5, 'x6': 22}, 'output': 374}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 30, 'x3': 2, 'x4': 18, 'x5': 5, 'x6': 22});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 374;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 965,
        "question": "A bird decides to leave her summer home in the north and travel to her winter home in the south.  To make the journey, the bird leaves her home flying in a southerly direction for 10 hours at a speed of 30 miles per hour.  Then, the bird turns direction and flies towards the north for 2 hours are a speed of 18 miles per hour.  Finally, the bird changes direction and flies toward the south for 5 hours at a speed of 22 miles per hour before landing at her southern home.  What is the distance, in miles, between the bird's northern and the southern homes?",
        "answer": 374,
        "examples": [{'input': {'x1': 10, 'x2': 30, 'x3': 2, 'x4': 18, 'x5': 5, 'x6': 22}, 'output': 374}],
        });
    fs.writeFileSync('json2/965.json', json);
}
doit();
