import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/440.json')) {
        console.log("Skipping 440")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("The area of Billie's rectangular bedroom is {{x1}} square feet. If the length of his room is {{x2}} yards, what is the perimeter of the room in feet?", [], [{'input': {'x1': 360, 'x2': 3}, 'output': 98}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 360, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 98;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 440,
        "question": "The area of Billie's rectangular bedroom is 360 square feet. If the length of his room is 3 yards, what is the perimeter of the room in feet?",
        "answer": 98,
        "examples": [{'input': {'x1': 360, 'x2': 3}, 'output': 98}],
        });
    fs.writeFileSync('json2/440.json', json);
}
doit();
