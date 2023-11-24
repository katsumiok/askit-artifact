import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1207.json')) {
        console.log("Skipping 1207")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Deandre caught {{x1}} tunas last Monday, the first tuna he caught weighs {{x2}} kilograms, the second tuna he caught weighs {{x3}} kilograms, and the last tuna he caught weighs {{x4}} kilograms. If a kilogram of tuna costs $0.50, how much will he earn after selling all the tunas to the market?', [], [{'input': {'x1': 3, 'x2': 56, 'x3': 46, 'x4': 26}, 'output': 64}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 56, 'x3': 46, 'x4': 26});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1207,
        "question": 'Deandre caught 3 tunas last Monday, the first tuna he caught weighs 56 kilograms, the second tuna he caught weighs 46 kilograms, and the last tuna he caught weighs 26 kilograms. If a kilogram of tuna costs $0.50, how much will he earn after selling all the tunas to the market?',
        "answer": 64,
        "examples": [{'input': {'x1': 3, 'x2': 56, 'x3': 46, 'x4': 26}, 'output': 64}],
        });
    fs.writeFileSync('json/1207.json', json);
}
doit();
