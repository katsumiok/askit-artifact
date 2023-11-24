import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/945.json')) {
        console.log("Skipping 945")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('James loves to go swimming and has to swim across a 20-mile lake.  He can swim at a pace of {{x1}} miles per hour.  He swims 60% of the distance.  After that, he stops on an island and rests for half as long as the swimming time.  He then finishes the remaining distance while going half the speed.  How long did it take him to get across the lake?', [], [{'input': {'x1': 2}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 945,
        "question": 'James loves to go swimming and has to swim across a 20-mile lake.  He can swim at a pace of 2 miles per hour.  He swims 60% of the distance.  After that, he stops on an island and rests for half as long as the swimming time.  He then finishes the remaining distance while going half the speed.  How long did it take him to get across the lake?',
        "answer": 17,
        "examples": [{'input': {'x1': 2}, 'output': 17}],
        });
    fs.writeFileSync('json2/945.json', json);
}
doit();
