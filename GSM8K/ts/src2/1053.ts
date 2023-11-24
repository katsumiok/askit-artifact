import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1053.json')) {
        console.log("Skipping 1053")
        return;
    }
    // measure time
    const f = define<number, {}>('Alison qualified for a spot on the running team, so she went shopping for some athletic gear. She bought a tank top for $10, a pair of running shorts for $5 more than the top cost, and a pair of tennis shoes that were originally $48 but were on sale for half price. She had a coupon for $2 off the package of $8 athletic socks that she also bought. How much did she spend on athletic gear?', [], [{'input': {}, 'output': 55}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 55;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1053,
        "question": 'Alison qualified for a spot on the running team, so she went shopping for some athletic gear. She bought a tank top for $10, a pair of running shorts for $5 more than the top cost, and a pair of tennis shoes that were originally $48 but were on sale for half price. She had a coupon for $2 off the package of $8 athletic socks that she also bought. How much did she spend on athletic gear?',
        "answer": 55,
        "examples": [{'input': {}, 'output': 55}],
        });
    fs.writeFileSync('json2/1053.json', json);
}
doit();
