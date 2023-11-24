import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/441.json')) {
        console.log("Skipping 441")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Two sisters, Elizabeth and Margareth, bought beads. Elizabeth bought {{x1}} pack of red and {{x2}} packs of clear beads, while Margareth bought {{x3}} packs of blue and {{x4}} packs of red beads. How many more beads do one sister have than the other, if each pack of beads contains {{x5}} pieces of beads?', [], [{'input': {'x1': 1, 'x2': 2, 'x3': 3, 'x4': 4, 'x5': 20}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 3, 'x4': 4, 'x5': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 441,
        "question": 'Two sisters, Elizabeth and Margareth, bought beads. Elizabeth bought 1 pack of red and 2 packs of clear beads, while Margareth bought 3 packs of blue and 4 packs of red beads. How many more beads do one sister have than the other, if each pack of beads contains 20 pieces of beads?',
        "answer": 80,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 3, 'x4': 4, 'x5': 20}, 'output': 80}],
        });
    fs.writeFileSync('json2/441.json', json);
}
doit();
