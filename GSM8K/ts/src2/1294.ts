import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1294.json')) {
        console.log("Skipping 1294")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jake is shopping at a clothing store. The store has a buy one get one 50% off deal on T-shirts. Jake buys {{x1}} T-shirts. The original price of each T-shirt is $8. Then, Jake buys a pair of shoes that is 40% off the original price. The original price of the shoes is $40. What is the total amount of money Jake spends at the store?', [], [{'input': {'x1': 2}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1294,
        "question": 'Jake is shopping at a clothing store. The store has a buy one get one 50% off deal on T-shirts. Jake buys 2 T-shirts. The original price of each T-shirt is $8. Then, Jake buys a pair of shoes that is 40% off the original price. The original price of the shoes is $40. What is the total amount of money Jake spends at the store?',
        "answer": 36,
        "examples": [{'input': {'x1': 2}, 'output': 36}],
        });
    fs.writeFileSync('json2/1294.json', json);
}
doit();
