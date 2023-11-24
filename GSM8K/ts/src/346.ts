import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/346.json')) {
        console.log("Skipping 346")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Jenny buys {{x1}} bag of cookies a week.  The bag has {{x2}} cookies and she puts {{x3}} cookies in her son's lunch box {{x4}} days a week.  Her husband eats {{x5}} cookie a day for {{x6}} days.  Jenny eats the rest of the cookies.  How many cookies does Jenny eat?", [], [{'input': {'x1': 1, 'x2': 36, 'x3': 4, 'x4': 5, 'x5': 1, 'x6': 7}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 36, 'x3': 4, 'x4': 5, 'x5': 1, 'x6': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 346,
        "question": "Jenny buys 1 bag of cookies a week.  The bag has 36 cookies and she puts 4 cookies in her son's lunch box 5 days a week.  Her husband eats 1 cookie a day for 7 days.  Jenny eats the rest of the cookies.  How many cookies does Jenny eat?",
        "answer": 9,
        "examples": [{'input': {'x1': 1, 'x2': 36, 'x3': 4, 'x4': 5, 'x5': 1, 'x6': 7}, 'output': 9}],
        });
    fs.writeFileSync('json/346.json', json);
}
doit();
