import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/744.json')) {
        console.log("Skipping 744")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Melissa works as a pet groomer. This week, she has {{x1}} dogs that need to be bathed, {{x2}} cats that need their nails clipped, {{x3}} birds that need their wings trimmed, and {{x4}} horses that need to be brushed. If she splits the grooming jobs evenly over the days, how many animals will she groom each day of the week?', [], [{'input': {'x1': 8, 'x2': 5, 'x3': 3, 'x4': 12}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 5, 'x3': 3, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 744,
        "question": 'Melissa works as a pet groomer. This week, she has 8 dogs that need to be bathed, 5 cats that need their nails clipped, 3 birds that need their wings trimmed, and 12 horses that need to be brushed. If she splits the grooming jobs evenly over the days, how many animals will she groom each day of the week?',
        "answer": 4,
        "examples": [{'input': {'x1': 8, 'x2': 5, 'x3': 3, 'x4': 12}, 'output': 4}],
        });
    fs.writeFileSync('json/744.json', json);
}
doit();
