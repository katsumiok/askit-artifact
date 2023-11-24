import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/795.json')) {
        console.log("Skipping 795")
        return;
    }
    // measure time
    const f = define<number, {}>('Mike needed a new pair of jeans.  When he got to the mall he saw that his favorite jeans were advertised 25% off.  The original price of the jeans was $40.  How much money will Mike have left over if he pays with a $50.00 bill?', [], [{'input': {}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 795,
        "question": 'Mike needed a new pair of jeans.  When he got to the mall he saw that his favorite jeans were advertised 25% off.  The original price of the jeans was $40.  How much money will Mike have left over if he pays with a $50.00 bill?',
        "answer": 20,
        "examples": [{'input': {}, 'output': 20}],
        });
    fs.writeFileSync('json/795.json', json);
}
doit();
