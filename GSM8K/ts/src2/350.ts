import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/350.json')) {
        console.log("Skipping 350")
        return;
    }
    // measure time
    const f = define<number, {}>('Peyton scheduled after-work activities of a one hour yoga class on Monday, a cooking class that lasts three times as long as Monday’s yoga on Tuesday, a half-hour cheese-tasting event on Wednesday, a museum tour that takes half as long as the cooking class on Thursday, and two hours of errands on Friday. How many hours will all Peyton’s after-work activities take?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 350,
        "question": 'Peyton scheduled after-work activities of a one hour yoga class on Monday, a cooking class that lasts three times as long as Monday’s yoga on Tuesday, a half-hour cheese-tasting event on Wednesday, a museum tour that takes half as long as the cooking class on Thursday, and two hours of errands on Friday. How many hours will all Peyton’s after-work activities take?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json2/350.json', json);
}
doit();
