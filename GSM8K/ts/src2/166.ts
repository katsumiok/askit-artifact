import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/166.json')) {
        console.log("Skipping 166")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Sandra's neighbor gives her a basket of {{x1}} eggs every time she babysits their daughter. To make a Spanish flan, she needs {{x2}} eggs. If Sandra has been tasked to make {{x3}} Spanish flans for her school fundraiser, how many times does Sandra have to babysit?", [], [{'input': {'x1': 9, 'x2': 3, 'x3': 15}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 3, 'x3': 15});
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
        "id": 166,
        "question": "Sandra's neighbor gives her a basket of 9 eggs every time she babysits their daughter. To make a Spanish flan, she needs 3 eggs. If Sandra has been tasked to make 15 Spanish flans for her school fundraiser, how many times does Sandra have to babysit?",
        "answer": 5,
        "examples": [{'input': {'x1': 9, 'x2': 3, 'x3': 15}, 'output': 5}],
        });
    fs.writeFileSync('json2/166.json', json);
}
doit();
