import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1032.json')) {
        console.log("Skipping 1032")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Grandpa loves to eat jelly beans, but how many jelly beans he can eat depends on the size of the beans.  It takes {{x1}} large jelly beans to fill Grandpa up. He can eat twice as many medium-sized beans as large beans.  And eating {{x2}} small beans is the same as eating {{x3}} medium-sized bean.  How many small beans can Grandpa eat?', [], [{'input': {'x1': 75, 'x2': 3, 'x3': 1}, 'output': 450}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 75, 'x2': 3, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 450;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1032,
        "question": 'Grandpa loves to eat jelly beans, but how many jelly beans he can eat depends on the size of the beans.  It takes 75 large jelly beans to fill Grandpa up. He can eat twice as many medium-sized beans as large beans.  And eating 3 small beans is the same as eating 1 medium-sized bean.  How many small beans can Grandpa eat?',
        "answer": 450,
        "examples": [{'input': {'x1': 75, 'x2': 3, 'x3': 1}, 'output': 450}],
        });
    fs.writeFileSync('json/1032.json', json);
}
doit();
