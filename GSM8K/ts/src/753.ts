import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/753.json')) {
        console.log("Skipping 753")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jeff owns a catering company.  During a recent event, he sent {{x1}} dozen glasses and {{x2}} dozen plates for the party.  When they were returned, {{x3}} glasses were broken as well as {{x4}} plates.  How many glasses and plates does Jeff have now?', [], [{'input': {'x1': 8, 'x2': 4, 'x3': 10, 'x4': 6}, 'output': 128}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 10, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 128;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 753,
        "question": 'Jeff owns a catering company.  During a recent event, he sent 8 dozen glasses and 4 dozen plates for the party.  When they were returned, 10 glasses were broken as well as 6 plates.  How many glasses and plates does Jeff have now?',
        "answer": 128,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 10, 'x4': 6}, 'output': 128}],
        });
    fs.writeFileSync('json/753.json', json);
}
doit();
