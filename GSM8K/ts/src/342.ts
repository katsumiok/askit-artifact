import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/342.json')) {
        console.log("Skipping 342")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Laurel's friend gave her {{x1}} baby outfits that her child no longer needed.  At her baby shower, Laurel received twice the amount of new baby outfits.  Then, Laurel's mom gifted her with another {{x2}} baby outfits.  How many outfits does she have for her baby?", [], [{'input': {'x1': 24, 'x2': 15}, 'output': 87}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 87;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 342,
        "question": "Laurel's friend gave her 24 baby outfits that her child no longer needed.  At her baby shower, Laurel received twice the amount of new baby outfits.  Then, Laurel's mom gifted her with another 15 baby outfits.  How many outfits does she have for her baby?",
        "answer": 87,
        "examples": [{'input': {'x1': 24, 'x2': 15}, 'output': 87}],
        });
    fs.writeFileSync('json/342.json', json);
}
doit();
