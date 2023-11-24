import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1105.json')) {
        console.log("Skipping 1105")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lauren is saving 20% of every paycheck. How many more years does Lauren need to work if she plans to save for a retirement period of {{x1}} years, live with 40% of her current annual salary, and her current salary is $100,000?', [], [{'input': {'x1': 20}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1105,
        "question": 'Lauren is saving 20% of every paycheck. How many more years does Lauren need to work if she plans to save for a retirement period of 20 years, live with 40% of her current annual salary, and her current salary is $100,000?',
        "answer": 40,
        "examples": [{'input': {'x1': 20}, 'output': 40}],
        });
    fs.writeFileSync('json2/1105.json', json);
}
doit();
