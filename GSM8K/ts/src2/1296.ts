import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1296.json')) {
        console.log("Skipping 1296")
        return;
    }
    // measure time
    const f = define<number, {}>('Ellen and her sister, Lani, went to the mall to buy presents for their mom. Ellen bought a pair of leggings for $100 and a photo frame for $5. Lani bought a pair of sunglasses at $30 and two bathrobes at $100 each. How much did they spend in all?', [], [{'input': {}, 'output': 335}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 335;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1296,
        "question": 'Ellen and her sister, Lani, went to the mall to buy presents for their mom. Ellen bought a pair of leggings for $100 and a photo frame for $5. Lani bought a pair of sunglasses at $30 and two bathrobes at $100 each. How much did they spend in all?',
        "answer": 335,
        "examples": [{'input': {}, 'output': 335}],
        });
    fs.writeFileSync('json2/1296.json', json);
}
doit();
