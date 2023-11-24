import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/260.json')) {
        console.log("Skipping 260")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Two cups of flour are needed to make a dozen cookies. Carla is making {{x1}} cookies today and {{x2}} cookies tomorrow. How many cups of flour will Carla need to bake the cookies today and tomorrow?', [], [{'input': {'x1': 36, 'x2': 30}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 36, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 260,
        "question": 'Two cups of flour are needed to make a dozen cookies. Carla is making 36 cookies today and 30 cookies tomorrow. How many cups of flour will Carla need to bake the cookies today and tomorrow?',
        "answer": 11,
        "examples": [{'input': {'x1': 36, 'x2': 30}, 'output': 11}],
        });
    fs.writeFileSync('json/260.json', json);
}
doit();
