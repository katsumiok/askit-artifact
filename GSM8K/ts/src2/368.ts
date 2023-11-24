import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/368.json')) {
        console.log("Skipping 368")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('After scoring {{x1}} points, Erin now has three times more points than Sara, who scored 8. How many points did Erin have before?', [], [{'input': {'x1': 14}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 368,
        "question": 'After scoring 14 points, Erin now has three times more points than Sara, who scored 8. How many points did Erin have before?',
        "answer": 18,
        "examples": [{'input': {'x1': 14}, 'output': 18}],
        });
    fs.writeFileSync('json2/368.json', json);
}
doit();
