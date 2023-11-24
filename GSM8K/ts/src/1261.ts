import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1261.json')) {
        console.log("Skipping 1261")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Alicia's clothes have to be sent to the dry cleaners weekly.  Her weekly drop-off includes {{x1}} blouses, {{x2}} pants and {{x3}} skirt.  If they charge her $5.00 per blouse, $6.00 per skirt and $8.00 per pair of pants, how much does she spend on dry-cleaning in {{x4}} weeks?", [], [{'input': {'x1': 5, 'x2': 2, 'x3': 1, 'x4': 5}, 'output': 235}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 1, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 235;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1261,
        "question": "Alicia's clothes have to be sent to the dry cleaners weekly.  Her weekly drop-off includes 5 blouses, 2 pants and 1 skirt.  If they charge her $5.00 per blouse, $6.00 per skirt and $8.00 per pair of pants, how much does she spend on dry-cleaning in 5 weeks?",
        "answer": 235,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 1, 'x4': 5}, 'output': 235}],
        });
    fs.writeFileSync('json/1261.json', json);
}
doit();
