import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/295.json')) {
        console.log("Skipping 295")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Darren decides to do body exercises for a whole week. He does {{x1}} pushups, {{x2}} squats, and {{x3}} dumbbell presses on the first day. On the second day, he does {{x4}} more pushups than on the first day, ten fewer squats, and doubles the number of dumbbell presses. What's the total count of the activities he's done in the two days?", [], [{'input': {'x1': 100, 'x2': 50, 'x3': 20, 'x4': 20}, 'output': 370}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 50, 'x3': 20, 'x4': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 370;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 295,
        "question": "Darren decides to do body exercises for a whole week. He does 100 pushups, 50 squats, and 20 dumbbell presses on the first day. On the second day, he does 20 more pushups than on the first day, ten fewer squats, and doubles the number of dumbbell presses. What's the total count of the activities he's done in the two days?",
        "answer": 370,
        "examples": [{'input': {'x1': 100, 'x2': 50, 'x3': 20, 'x4': 20}, 'output': 370}],
        });
    fs.writeFileSync('json/295.json', json);
}
doit();
