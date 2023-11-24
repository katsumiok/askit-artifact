import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/577.json')) {
        console.log("Skipping 577")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mack wants to count things and decided to count how many birds there are in the sky over the next week. On days one and two, Mack saw a total of {{x1}} birds. On day three he saw none. On days four and five, he saw {{x2}} birds. On day six he saw {{x3}} and on day seven he saw 90. On average, how many birds did Mack see in a day?', [], [{'input': {'x1': 50, 'x2': 120, 'x3': 20}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 120, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 577,
        "question": 'Mack wants to count things and decided to count how many birds there are in the sky over the next week. On days one and two, Mack saw a total of 50 birds. On day three he saw none. On days four and five, he saw 120 birds. On day six he saw 20 and on day seven he saw 90. On average, how many birds did Mack see in a day?',
        "answer": 40,
        "examples": [{'input': {'x1': 50, 'x2': 120, 'x3': 20}, 'output': 40}],
        });
    fs.writeFileSync('json/577.json', json);
}
doit();
