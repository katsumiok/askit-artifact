import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/110.json')) {
        console.log("Skipping 110")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Marcell and Beatrice are having a contest to see who can eat the most fruit roll-ups, so they unroll as many as they can find. Unfortunately, someone makes a mistake and Beatrice's was two roll-ups wide and {{x1}} rolls up long while Marcell's was {{x2}} roll-ups wide and {{x3}} roll-ups long. If they both ate their entire amount, how many did they eat on average?", [], [{'input': {'x1': 24, 'x2': 3, 'x3': 14}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 3, 'x3': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 110,
        "question": "Marcell and Beatrice are having a contest to see who can eat the most fruit roll-ups, so they unroll as many as they can find. Unfortunately, someone makes a mistake and Beatrice's was two roll-ups wide and 24 rolls up long while Marcell's was 3 roll-ups wide and 14 roll-ups long. If they both ate their entire amount, how many did they eat on average?",
        "answer": 45,
        "examples": [{'input': {'x1': 24, 'x2': 3, 'x3': 14}, 'output': 45}],
        });
    fs.writeFileSync('json/110.json', json);
}
doit();
