import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/988.json')) {
        console.log("Skipping 988")
        return;
    }
    // measure time
    const f = define<number, {}>('Jessica makes $2,000.00 a month.  She sets 25% of her paycheck aside to put towards fancy shoes.  Each pair of shoes she buys costs $1,000.00.  How many shoes can she buy in a year?', [], [{'input': {}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 988,
        "question": 'Jessica makes $2,000.00 a month.  She sets 25% of her paycheck aside to put towards fancy shoes.  Each pair of shoes she buys costs $1,000.00.  How many shoes can she buy in a year?',
        "answer": 6,
        "examples": [{'input': {}, 'output': 6}],
        });
    fs.writeFileSync('json2/988.json', json);
}
doit();
