import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/812.json')) {
        console.log("Skipping 812")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number, x9: number}>("Rose is out picking flowers for a vase she wants to fill.  She starts off by picking {{x1}} flowers with {{x2}} petals each.  She then picks {{x3}} flowers with {{x4}} petals each.  She then adds another {{x5}} flowers with {{x6}} petals each.  Lastly she picks {{x7}} flowers with {{x8}} petals each.  As she's carrying these flowers over to fill the vase, she drops {{x9}} of each and the wind blows them away.  She puts the remaining flowers in the vase.  How many petals in total are on the flowers in the vase?", [], [{'input': {'x1': 3, 'x2': 5, 'x3': 4, 'x4': 6, 'x5': 5, 'x6': 4, 'x7': 6, 'x8': 7, 'x9': 1}, 'output': 79}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 4, 'x4': 6, 'x5': 5, 'x6': 4, 'x7': 6, 'x8': 7, 'x9': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 79;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 812,
        "question": "Rose is out picking flowers for a vase she wants to fill.  She starts off by picking 3 flowers with 5 petals each.  She then picks 4 flowers with 6 petals each.  She then adds another 5 flowers with 4 petals each.  Lastly she picks 6 flowers with 7 petals each.  As she's carrying these flowers over to fill the vase, she drops 1 of each and the wind blows them away.  She puts the remaining flowers in the vase.  How many petals in total are on the flowers in the vase?",
        "answer": 79,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 4, 'x4': 6, 'x5': 5, 'x6': 4, 'x7': 6, 'x8': 7, 'x9': 1}, 'output': 79}],
        });
    fs.writeFileSync('json/812.json', json);
}
doit();
