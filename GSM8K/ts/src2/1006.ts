import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1006.json')) {
        console.log("Skipping 1006")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The Smith family is getting ready for summer and needs to have their swimming pool filled. The pool company instructed them to measure to find the volume of the pool, then to multiply it by 5.9 to calculate how many gallons of water they need. The cost for the pool company to come and fill the pool is $0.10 per gallon. Mr. Smith measured and found the pool is {{x1}} feet wide, {{x2}} feet long, and {{x3}} feet deep. How much will it cost to fill the pool?', [], [{'input': {'x1': 14, 'x2': 25, 'x3': 4}, 'output': 826}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 25, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 826;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1006,
        "question": 'The Smith family is getting ready for summer and needs to have their swimming pool filled. The pool company instructed them to measure to find the volume of the pool, then to multiply it by 5.9 to calculate how many gallons of water they need. The cost for the pool company to come and fill the pool is $0.10 per gallon. Mr. Smith measured and found the pool is 14 feet wide, 25 feet long, and 4 feet deep. How much will it cost to fill the pool?',
        "answer": 826,
        "examples": [{'input': {'x1': 14, 'x2': 25, 'x3': 4}, 'output': 826}],
        });
    fs.writeFileSync('json2/1006.json', json);
}
doit();
