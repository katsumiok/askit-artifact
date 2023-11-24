import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1042.json')) {
        console.log("Skipping 1042")
        return;
    }
    // measure time
    const f = define<number, {}>("Johnny's dad brought him to watch some horse racing and his dad bet money. On the first race, he lost $5. On the second race, he won $1 more than twice the amount he previously lost. On the third race, he lost 1.5 times as much as he won in the second race. How much did he lose on average that day?", [], [{'input': {}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1042,
        "question": "Johnny's dad brought him to watch some horse racing and his dad bet money. On the first race, he lost $5. On the second race, he won $1 more than twice the amount he previously lost. On the third race, he lost 1.5 times as much as he won in the second race. How much did he lose on average that day?",
        "answer": 3,
        "examples": [{'input': {}, 'output': 3}],
        });
    fs.writeFileSync('json/1042.json', json);
}
doit();
