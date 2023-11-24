import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/412.json')) {
        console.log("Skipping 412")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Shannon makes her own madeleine cookies and eats {{x1}} a night as a treat.  She wants to make enough cookies to last her for {{x2}} days by storing them in the freezer. Her recipe makes {{x3}} dozen madeleine cookies.  How many dozens of cookies will she need to make so she has enough for {{x4}} days?', [], [{'input': {'x1': 2, 'x2': 30, 'x3': 1, 'x4': 30}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 30, 'x3': 1, 'x4': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 412,
        "question": 'Shannon makes her own madeleine cookies and eats 2 a night as a treat.  She wants to make enough cookies to last her for 30 days by storing them in the freezer. Her recipe makes 1 dozen madeleine cookies.  How many dozens of cookies will she need to make so she has enough for 30 days?',
        "answer": 5,
        "examples": [{'input': {'x1': 2, 'x2': 30, 'x3': 1, 'x4': 30}, 'output': 5}],
        });
    fs.writeFileSync('json/412.json', json);
}
doit();
