import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1082.json')) {
        console.log("Skipping 1082")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('James decided to walk to the store.  When he got halfway there he realized he forgot something at home and had to walk back.  If his home is {{x1}} miles from the store and he walks {{x2}} miles per hour how long did it take him to reach the store?', [], [{'input': {'x1': 4, 'x2': 4}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1082,
        "question": 'James decided to walk to the store.  When he got halfway there he realized he forgot something at home and had to walk back.  If his home is 4 miles from the store and he walks 4 miles per hour how long did it take him to reach the store?',
        "answer": 2,
        "examples": [{'input': {'x1': 4, 'x2': 4}, 'output': 2}],
        });
    fs.writeFileSync('json2/1082.json', json);
}
doit();
