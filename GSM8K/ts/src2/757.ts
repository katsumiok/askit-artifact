import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/757.json')) {
        console.log("Skipping 757")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Krissa needs to order field trip shirts for her preschool students. {{x1}} students need size extra-small.  Twice as many students need size small as extra small. Four less than the number of size small students need size medium.  Half as many students need size large as size medium.  Six more students need size extra-large than large.  Altogether, how many shirts did Krissa order?', [], [{'input': {'x1': 11}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 11});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 757,
        "question": 'Krissa needs to order field trip shirts for her preschool students. 11 students need size extra-small.  Twice as many students need size small as extra small. Four less than the number of size small students need size medium.  Half as many students need size large as size medium.  Six more students need size extra-large than large.  Altogether, how many shirts did Krissa order?',
        "answer": 75,
        "examples": [{'input': {'x1': 11}, 'output': 75}],
        });
    fs.writeFileSync('json2/757.json', json);
}
doit();
