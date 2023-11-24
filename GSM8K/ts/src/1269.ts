import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1269.json')) {
        console.log("Skipping 1269")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Elvis starts driving from his house and travels west for {{x1}} hours. Then he turns around and travels east for {{x2}} hours. If he was driving at an average speed of 18mph for both parts of the journey, how far is he from his house now?', [], [{'input': {'x1': 5, 'x2': 8}, 'output': 54}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 54;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1269,
        "question": 'Elvis starts driving from his house and travels west for 5 hours. Then he turns around and travels east for 8 hours. If he was driving at an average speed of 18mph for both parts of the journey, how far is he from his house now?',
        "answer": 54,
        "examples": [{'input': {'x1': 5, 'x2': 8}, 'output': 54}],
        });
    fs.writeFileSync('json/1269.json', json);
}
doit();
