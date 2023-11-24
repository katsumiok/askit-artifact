import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/550.json')) {
        console.log("Skipping 550")
        return;
    }
    // measure time
    const f = define<number, {}>('A shop sells school supplies. One notebook is sold at $1.50 each, a pen at $0.25 each, a calculator at $12 each, and a geometry set at $10. Daniel is an engineering student, and he wants to buy five notebooks, two pens, one calculator, and one geometry set. The shop gives a 10% discount on all the purchased items. How much does Daniel have to spend on all the items he wants to buy?', [], [{'input': {}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 550,
        "question": 'A shop sells school supplies. One notebook is sold at $1.50 each, a pen at $0.25 each, a calculator at $12 each, and a geometry set at $10. Daniel is an engineering student, and he wants to buy five notebooks, two pens, one calculator, and one geometry set. The shop gives a 10% discount on all the purchased items. How much does Daniel have to spend on all the items he wants to buy?',
        "answer": 27,
        "examples": [{'input': {}, 'output': 27}],
        });
    fs.writeFileSync('json2/550.json', json);
}
doit();
