import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/225.json')) {
        console.log("Skipping 225")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Andrew plans a road trip from New Jersey to Rochester. It takes {{x1}} days to travel by bus and half as many days to travel by car from New Jersey to Rochester. How many days will he travel if he plans to go to Rochester by bus and return from Rochester by car?', [], [{'input': {'x1': 6}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
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
        "id": 225,
        "question": 'Andrew plans a road trip from New Jersey to Rochester. It takes 6 days to travel by bus and half as many days to travel by car from New Jersey to Rochester. How many days will he travel if he plans to go to Rochester by bus and return from Rochester by car?',
        "answer": 9,
        "examples": [{'input': {'x1': 6}, 'output': 9}],
        });
    fs.writeFileSync('json2/225.json', json);
}
doit();
