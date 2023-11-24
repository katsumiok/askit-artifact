import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/727.json')) {
        console.log("Skipping 727")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Hannah has a mental breakdown while studying for finals and starts smashing windows in the high school's parking lot. She smashes a quarter of the students' cars' windows and 3/4ths of the teachers' cars' windows. If there are {{x1}} students' cars with four windows each and {{x2}} teachers' cars with two windows each, how many windows does Hannah smash?", [], [{'input': {'x1': 64, 'x2': 32}, 'output': 112}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 64, 'x2': 32});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 112;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 727,
        "question": "Hannah has a mental breakdown while studying for finals and starts smashing windows in the high school's parking lot. She smashes a quarter of the students' cars' windows and 3/4ths of the teachers' cars' windows. If there are 64 students' cars with four windows each and 32 teachers' cars with two windows each, how many windows does Hannah smash?",
        "answer": 112,
        "examples": [{'input': {'x1': 64, 'x2': 32}, 'output': 112}],
        });
    fs.writeFileSync('json2/727.json', json);
}
doit();
