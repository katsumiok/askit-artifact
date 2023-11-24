import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1263.json')) {
        console.log("Skipping 1263")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Conor lives near a beach and loves going there every day to have fun. On a particular week, he found {{x1}} people at the beach on the first day. The next day, {{x2}} more people were present at the beach than on the first day, and on the third day, the total number of people increased to twice the number that were there on the second day. If Conor saw an average of {{x3}} people each day the rest of the week, calculate the total number of people Conor saw at the beach that week.', [], [{'input': {'x1': 50, 'x2': 20, 'x3': 60}, 'output': 500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 20, 'x3': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1263,
        "question": 'Conor lives near a beach and loves going there every day to have fun. On a particular week, he found 50 people at the beach on the first day. The next day, 20 more people were present at the beach than on the first day, and on the third day, the total number of people increased to twice the number that were there on the second day. If Conor saw an average of 60 people each day the rest of the week, calculate the total number of people Conor saw at the beach that week.',
        "answer": 500,
        "examples": [{'input': {'x1': 50, 'x2': 20, 'x3': 60}, 'output': 500}],
        });
    fs.writeFileSync('json2/1263.json', json);
}
doit();
