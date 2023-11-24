import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/730.json')) {
        console.log("Skipping 730")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Parker chews {{x1}} pieces of gum a day.  A pack of gum has {{x2}} pieces of chewing gum per pack.  How many packs of gum will he need to last him {{x3}} days?', [], [{'input': {'x1': 4, 'x2': 15, 'x3': 30}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 15, 'x3': 30});
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
        "id": 730,
        "question": 'Parker chews 4 pieces of gum a day.  A pack of gum has 15 pieces of chewing gum per pack.  How many packs of gum will he need to last him 30 days?',
        "answer": 8,
        "examples": [{'input': {'x1': 4, 'x2': 15, 'x3': 30}, 'output': 8}],
        });
    fs.writeFileSync('json2/730.json', json);
}
doit();
