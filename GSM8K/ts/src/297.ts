import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/297.json')) {
        console.log("Skipping 297")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Sam sells bread. He has a target of selling {{x1}} crates of bread in a week. One week he was closed on Monday and Friday. Over the weekend he sold {{x2}} crates. On Tuesday he sold {{x3}} crates, on Wednesday {{x4}} crates, and Thursday {{x5}} crates. By how many crates was Sam off from his target for the week?', [], [{'input': {'x1': 120, 'x2': 20, 'x3': 15, 'x4': 12, 'x5': 18}, 'output': 55}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120, 'x2': 20, 'x3': 15, 'x4': 12, 'x5': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 55;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 297,
        "question": 'Sam sells bread. He has a target of selling 120 crates of bread in a week. One week he was closed on Monday and Friday. Over the weekend he sold 20 crates. On Tuesday he sold 15 crates, on Wednesday 12 crates, and Thursday 18 crates. By how many crates was Sam off from his target for the week?',
        "answer": 55,
        "examples": [{'input': {'x1': 120, 'x2': 20, 'x3': 15, 'x4': 12, 'x5': 18}, 'output': 55}],
        });
    fs.writeFileSync('json/297.json', json);
}
doit();
