import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1260.json')) {
        console.log("Skipping 1260")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jade bought a new cell phone with an incredible camera, so she spent all week taking pictures of her daily life. At the end of the week, she had taken {{x1}} photos. She wants to upload all her photos on her Instagram. If she uploads {{x2}} photos in one batch and she uploads {{x3}} batches each day, how many days will she need to upload all of her photos?', [], [{'input': {'x1': 210, 'x2': 7, 'x3': 6}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 210, 'x2': 7, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1260,
        "question": 'Jade bought a new cell phone with an incredible camera, so she spent all week taking pictures of her daily life. At the end of the week, she had taken 210 photos. She wants to upload all her photos on her Instagram. If she uploads 7 photos in one batch and she uploads 6 batches each day, how many days will she need to upload all of her photos?',
        "answer": 5,
        "examples": [{'input': {'x1': 210, 'x2': 7, 'x3': 6}, 'output': 5}],
        });
    fs.writeFileSync('json/1260.json', json);
}
doit();
