import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/249.json')) {
        console.log("Skipping 249")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('On Monday, Sue ate {{x1}} times as many cookies as her sister. On Tuesday, she ate twice as many cookies as her sister. Her sister ate {{x2}} cookies on Monday and {{x3}} the next day. If {{x4}} cookie has {{x5}} calories, how many more calories did Sue consume than her sister?', [], [{'input': {'x1': 4, 'x2': 5, 'x3': 13, 'x4': 1, 'x5': 200}, 'output': 5600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5, 'x3': 13, 'x4': 1, 'x5': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 249,
        "question": 'On Monday, Sue ate 4 times as many cookies as her sister. On Tuesday, she ate twice as many cookies as her sister. Her sister ate 5 cookies on Monday and 13 the next day. If 1 cookie has 200 calories, how many more calories did Sue consume than her sister?',
        "answer": 5600,
        "examples": [{'input': {'x1': 4, 'x2': 5, 'x3': 13, 'x4': 1, 'x5': 200}, 'output': 5600}],
        });
    fs.writeFileSync('json2/249.json', json);
}
doit();
