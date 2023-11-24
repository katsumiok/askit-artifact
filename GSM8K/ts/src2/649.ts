import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/649.json')) {
        console.log("Skipping 649")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Fishio posted her selfie on Instagram. She received {{x1}} likes on the photo after {{x2}} week. Three weeks later, the number of likes was {{x3}} times as many as the initial number of likes. If she received {{x4}} more new likes recently, how many Instagram likes are there?', [], [{'input': {'x1': 2000, 'x2': 1, 'x3': 70, 'x4': 20000}, 'output': 162000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2000, 'x2': 1, 'x3': 70, 'x4': 20000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 162000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 649,
        "question": 'Fishio posted her selfie on Instagram. She received 2000 likes on the photo after 1 week. Three weeks later, the number of likes was 70 times as many as the initial number of likes. If she received 20000 more new likes recently, how many Instagram likes are there?',
        "answer": 162000,
        "examples": [{'input': {'x1': 2000, 'x2': 1, 'x3': 70, 'x4': 20000}, 'output': 162000}],
        });
    fs.writeFileSync('json2/649.json', json);
}
doit();
