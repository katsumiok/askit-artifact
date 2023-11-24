import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1306.json')) {
        console.log("Skipping 1306")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Dr. Hugo Grumpus and his assistant, Igor, were preparing to perform a laboratory experiment.  Dr. Grumpus told Igor to gather {{x1}} test tubes, {{x2}} beakers, and {{x3}} Petri dishes, and to place them all on the lab bench.  By accident, Igor gathered half as many test tubes as requested, two more than the number of Petri dishes requested.  And while he had picked up the correct number of beakers, he lost several on the way to the lab bench.  In total, the number of items Igor had placed on the lab bench was 29.  How many beakers did Igor lose?', [], [{'input': {'x1': 16, 'x2': 7, 'x3': 14}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 7, 'x3': 14});
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
        "id": 1306,
        "question": 'Dr. Hugo Grumpus and his assistant, Igor, were preparing to perform a laboratory experiment.  Dr. Grumpus told Igor to gather 16 test tubes, 7 beakers, and 14 Petri dishes, and to place them all on the lab bench.  By accident, Igor gathered half as many test tubes as requested, two more than the number of Petri dishes requested.  And while he had picked up the correct number of beakers, he lost several on the way to the lab bench.  In total, the number of items Igor had placed on the lab bench was 29.  How many beakers did Igor lose?',
        "answer": 2,
        "examples": [{'input': {'x1': 16, 'x2': 7, 'x3': 14}, 'output': 2}],
        });
    fs.writeFileSync('json2/1306.json', json);
}
doit();
