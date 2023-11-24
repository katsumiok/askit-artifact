import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/903.json')) {
        console.log("Skipping 903")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Jo has been making face masks. She can make {{x1}} small masks with {{x2}} yards of material and {{x3}} large masks with 2.25 yards of material. How much material would she need to make {{x4}} small and {{x5}} large masks for her class?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 3, 'x4': 20, 'x5': 8}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 3, 'x4': 20, 'x5': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 903,
        "question": 'Jo has been making face masks. She can make 4 small masks with 2 yards of material and 3 large masks with 2.25 yards of material. How much material would she need to make 20 small and 8 large masks for her class?',
        "answer": 16,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 3, 'x4': 20, 'x5': 8}, 'output': 16}],
        });
    fs.writeFileSync('json/903.json', json);
}
doit();
