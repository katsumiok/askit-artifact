import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/273.json')) {
        console.log("Skipping 273")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Terri is knitting a sweater with two sleeves, a collar, and a decorative rosette. The body of the sweater takes {{x1}} stitches to complete, the collar takes a tenth of that number of stitches, and the rosette takes twice as many as the collar. The whole sweater is an 1800-stitch project. How many stitches does each sleeve take?', [], [{'input': {'x1': 900}, 'output': 315}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 900});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 315;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 273,
        "question": 'Terri is knitting a sweater with two sleeves, a collar, and a decorative rosette. The body of the sweater takes 900 stitches to complete, the collar takes a tenth of that number of stitches, and the rosette takes twice as many as the collar. The whole sweater is an 1800-stitch project. How many stitches does each sleeve take?',
        "answer": 315,
        "examples": [{'input': {'x1': 900}, 'output': 315}],
        });
    fs.writeFileSync('json/273.json', json);
}
doit();
