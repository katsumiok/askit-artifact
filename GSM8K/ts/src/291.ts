import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/291.json')) {
        console.log("Skipping 291")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('4 adults and {{x1}} children are to share {{x2}} packets of chocolate bars. Each packet contains {{x3}} chocolate bars. If each adult gets {{x4}} chocolate bars and the rest are to be shared equally among the children, how many will each child get?', [], [{'input': {'x1': 8, 'x2': 8, 'x3': 5, 'x4': 6}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 8, 'x3': 5, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 291,
        "question": '4 adults and 8 children are to share 8 packets of chocolate bars. Each packet contains 5 chocolate bars. If each adult gets 6 chocolate bars and the rest are to be shared equally among the children, how many will each child get?',
        "answer": 2,
        "examples": [{'input': {'x1': 8, 'x2': 8, 'x3': 5, 'x4': 6}, 'output': 2}],
        });
    fs.writeFileSync('json/291.json', json);
}
doit();
