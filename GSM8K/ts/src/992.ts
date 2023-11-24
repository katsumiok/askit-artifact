import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/992.json')) {
        console.log("Skipping 992")
        return;
    }
    // measure time
    const f = define<number, {}>('Buford writes many checks every year.  Once per month he writes a check to pay the electric bill.  He also writes a check every month for the gas bill.  Twice per month he writes a check to the church.  And quarterly, he writes a check to the pest and lawn service.  How many checks does Buford write per year?', [], [{'input': {}, 'output': 52}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 52;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 992,
        "question": 'Buford writes many checks every year.  Once per month he writes a check to pay the electric bill.  He also writes a check every month for the gas bill.  Twice per month he writes a check to the church.  And quarterly, he writes a check to the pest and lawn service.  How many checks does Buford write per year?',
        "answer": 52,
        "examples": [{'input': {}, 'output': 52}],
        });
    fs.writeFileSync('json/992.json', json);
}
doit();
