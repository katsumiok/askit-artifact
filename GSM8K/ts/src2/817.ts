import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/817.json')) {
        console.log("Skipping 817")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Paul needs {{x1}} cupcakes for a birthday party happening on Saturday. He already has {{x2}} chocolate cupcakes and {{x3}} toffee cupcakes. How many more cupcakes should Paul buy?', [], [{'input': {'x1': 63, 'x2': 8, 'x3': 40}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 63, 'x2': 8, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 817,
        "question": 'Paul needs 63 cupcakes for a birthday party happening on Saturday. He already has 8 chocolate cupcakes and 40 toffee cupcakes. How many more cupcakes should Paul buy?',
        "answer": 15,
        "examples": [{'input': {'x1': 63, 'x2': 8, 'x3': 40}, 'output': 15}],
        });
    fs.writeFileSync('json2/817.json', json);
}
doit();
