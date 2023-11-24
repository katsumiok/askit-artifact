import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1250.json')) {
        console.log("Skipping 1250")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mitchell is making nachos for his family. He buys two bags of chips with {{x1}} chips each. If his family has five members, how many chips does each person get if they all get the same number?', [], [{'input': {'x1': 55}, 'output': 22}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 55});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 22;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1250,
        "question": 'Mitchell is making nachos for his family. He buys two bags of chips with 55 chips each. If his family has five members, how many chips does each person get if they all get the same number?',
        "answer": 22,
        "examples": [{'input': {'x1': 55}, 'output': 22}],
        });
    fs.writeFileSync('json/1250.json', json);
}
doit();
