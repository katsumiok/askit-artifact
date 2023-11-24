import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/446.json')) {
        console.log("Skipping 446")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Rozanne is making eggnog for her family. She uses {{x1}} dozen eggs that were in cases and another {{x2}} eggs that were loose in the cupboard. She puts out trays that each hold {{x3}} glasses of eggnog. If each glass needs {{x4}} eggs, how many trays can Rozanne put out?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 5, 'x4': 5}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 5, 'x4': 5});
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
        "id": 446,
        "question": 'Rozanne is making eggnog for her family. She uses 4 dozen eggs that were in cases and another 2 eggs that were loose in the cupboard. She puts out trays that each hold 5 glasses of eggnog. If each glass needs 5 eggs, how many trays can Rozanne put out?',
        "answer": 2,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 5, 'x4': 5}, 'output': 2}],
        });
    fs.writeFileSync('json/446.json', json);
}
doit();
