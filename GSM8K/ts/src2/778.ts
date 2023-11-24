import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/778.json')) {
        console.log("Skipping 778")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('At the local Pick Your Own fruit orchard, you could pick your own peaches for $2.00 per pound, plums were $1.00 per pound and apricots were $3.00 per pound.  If Winston picked {{x1}} pounds of peaches, {{x2}} pounds of plums and {{x3}} pounds of apricots, how much did he spend on fruit?', [], [{'input': {'x1': 6, 'x2': 8, 'x3': 6}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 38;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 778,
        "question": 'At the local Pick Your Own fruit orchard, you could pick your own peaches for $2.00 per pound, plums were $1.00 per pound and apricots were $3.00 per pound.  If Winston picked 6 pounds of peaches, 8 pounds of plums and 6 pounds of apricots, how much did he spend on fruit?',
        "answer": 38,
        "examples": [{'input': {'x1': 6, 'x2': 8, 'x3': 6}, 'output': 38}],
        });
    fs.writeFileSync('json2/778.json', json);
}
doit();
