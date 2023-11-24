import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/592.json')) {
        console.log("Skipping 592")
        return;
    }
    // measure time
    const f = define<number, {}>('Marilyn wants to buy a pair of boots online. On Amazon.com, the boots cost $16 and shipping costs $4. On eBay, those same pair of shoes are only $13, but shipping costs twice as much as it does on Amazon. How much more expensive do the boots work out to be on eBay?', [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 592,
        "question": 'Marilyn wants to buy a pair of boots online. On Amazon.com, the boots cost $16 and shipping costs $4. On eBay, those same pair of shoes are only $13, but shipping costs twice as much as it does on Amazon. How much more expensive do the boots work out to be on eBay?',
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json2/592.json', json);
}
doit();
