import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/469.json')) {
        console.log("Skipping 469")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mary has {{x1}} jars of sprinkles in her pantry. Each jar of sprinkles can decorate {{x2}} cupcakes. Mary wants to bake enough cupcakes to use up all of her sprinkles. If each pan holds {{x3}} cupcakes, how many pans worth of cupcakes should she bake?', [], [{'input': {'x1': 6, 'x2': 8, 'x3': 12}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 469,
        "question": 'Mary has 6 jars of sprinkles in her pantry. Each jar of sprinkles can decorate 8 cupcakes. Mary wants to bake enough cupcakes to use up all of her sprinkles. If each pan holds 12 cupcakes, how many pans worth of cupcakes should she bake?',
        "answer": 4,
        "examples": [{'input': {'x1': 6, 'x2': 8, 'x3': 12}, 'output': 4}],
        });
    fs.writeFileSync('json/469.json', json);
}
doit();
