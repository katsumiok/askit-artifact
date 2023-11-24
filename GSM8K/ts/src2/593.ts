import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/593.json')) {
        console.log("Skipping 593")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Mark plants a beanstalk below his second-story window, which is {{x1}} feet off the ground. The beanstalk doubles its height every day. If the beanstalk starts out {{x2}} feet tall, how many days will it take to be taller than Mark's window?", [], [{'input': {'x1': 20, 'x2': 4}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 4});
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
        "id": 593,
        "question": "Mark plants a beanstalk below his second-story window, which is 20 feet off the ground. The beanstalk doubles its height every day. If the beanstalk starts out 4 feet tall, how many days will it take to be taller than Mark's window?",
        "answer": 3,
        "examples": [{'input': {'x1': 20, 'x2': 4}, 'output': 3}],
        });
    fs.writeFileSync('json2/593.json', json);
}
doit();
