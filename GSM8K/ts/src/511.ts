import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/511.json')) {
        console.log("Skipping 511")
        return;
    }
    // measure time
    const f = define<number, {}>('Gerald works at a daycare that pays him $30 every day. He worked for an entire week and spent a total of $100. How much does he have left?', [], [{'input': {}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 511,
        "question": 'Gerald works at a daycare that pays him $30 every day. He worked for an entire week and spent a total of $100. How much does he have left?',
        "answer": 110,
        "examples": [{'input': {}, 'output': 110}],
        });
    fs.writeFileSync('json/511.json', json);
}
doit();
