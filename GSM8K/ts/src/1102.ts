import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1102.json')) {
        console.log("Skipping 1102")
        return;
    }
    // measure time
    const f = define<number, {}>('Sheila charged $85.00 worth of merchandise on her credit card.  She ended up returning one item that cost $15.00.  After she returned the item, she bought a frying pan that was on sale for 20% off $20.00 and a set of towels that was 10% off $30.00.  She put both of these purchases on her credit card.  What is the new balance on her credit card?', [], [{'input': {}, 'output': 113}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 113;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1102,
        "question": 'Sheila charged $85.00 worth of merchandise on her credit card.  She ended up returning one item that cost $15.00.  After she returned the item, she bought a frying pan that was on sale for 20% off $20.00 and a set of towels that was 10% off $30.00.  She put both of these purchases on her credit card.  What is the new balance on her credit card?',
        "answer": 113,
        "examples": [{'input': {}, 'output': 113}],
        });
    fs.writeFileSync('json/1102.json', json);
}
doit();
