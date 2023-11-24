import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/157.json')) {
        console.log("Skipping 157")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Blake and Kelly are having a contest to see who can run the most in {{x1}} minutes. They decide to do it on a football field that is {{x2}} yards long. Blake runs back and forth {{x3}} times. Kelly runs back and forth once, and then decides that she doesn't want to run next to Blake, so she starts to run to the 40-yard line and back. She does this {{x4}} times. How much farther does the winner run than the loser?", [], [{'input': {'x1': 15, 'x2': 100, 'x3': 15, 'x4': 34}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 100, 'x3': 15, 'x4': 34});
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
        "id": 157,
        "question": "Blake and Kelly are having a contest to see who can run the most in 15 minutes. They decide to do it on a football field that is 100 yards long. Blake runs back and forth 15 times. Kelly runs back and forth once, and then decides that she doesn't want to run next to Blake, so she starts to run to the 40-yard line and back. She does this 34 times. How much farther does the winner run than the loser?",
        "answer": 80,
        "examples": [{'input': {'x1': 15, 'x2': 100, 'x3': 15, 'x4': 34}, 'output': 80}],
        });
    fs.writeFileSync('json/157.json', json);
}
doit();
