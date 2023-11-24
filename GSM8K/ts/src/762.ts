import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/762.json')) {
        console.log("Skipping 762")
        return;
    }
    // measure time
    const f = define<number, {}>('Jayden had $70 from selling pictures he took as a hobby.  His sister Ava gave him half of her $90 allowance to help him buy a new camera that costs $200. How much more does Jayden need to buy the camera?', [], [{'input': {}, 'output': 85}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 85;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 762,
        "question": 'Jayden had $70 from selling pictures he took as a hobby.  His sister Ava gave him half of her $90 allowance to help him buy a new camera that costs $200. How much more does Jayden need to buy the camera?',
        "answer": 85,
        "examples": [{'input': {}, 'output': 85}],
        });
    fs.writeFileSync('json/762.json', json);
}
doit();
