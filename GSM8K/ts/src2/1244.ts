import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1244.json')) {
        console.log("Skipping 1244")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Audrey has to take two math tests to pass 6th grade. She must correctly answer 70% of the total questions to move on to the 7th grade. The first test has {{x1}} questions and she gets 60% of them correct. The second test has {{x2}} questions. How many questions does she need to get right on the second test to move onto the 7th grade?', [], [{'input': {'x1': 70, 'x2': 40}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 70, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1244,
        "question": 'Audrey has to take two math tests to pass 6th grade. She must correctly answer 70% of the total questions to move on to the 7th grade. The first test has 70 questions and she gets 60% of them correct. The second test has 40 questions. How many questions does she need to get right on the second test to move onto the 7th grade?',
        "answer": 35,
        "examples": [{'input': {'x1': 70, 'x2': 40}, 'output': 35}],
        });
    fs.writeFileSync('json2/1244.json', json);
}
doit();
