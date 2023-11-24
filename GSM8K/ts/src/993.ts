import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/993.json')) {
        console.log("Skipping 993")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('An airport has only {{x1}} planes that fly multiple times a day. Each day, the first plane goes to Greece for three-quarters of its flights, and the remaining flights are split equally between flights to France and flights to Germany. The other plane flies exclusively to Poland, and its {{x2}} trips only amount to half the number of trips the first plane makes throughout each day. How many flights to France does the first plane take in one day?', [], [{'input': {'x1': 2, 'x2': 44}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 44});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 993,
        "question": 'An airport has only 2 planes that fly multiple times a day. Each day, the first plane goes to Greece for three-quarters of its flights, and the remaining flights are split equally between flights to France and flights to Germany. The other plane flies exclusively to Poland, and its 44 trips only amount to half the number of trips the first plane makes throughout each day. How many flights to France does the first plane take in one day?',
        "answer": 11,
        "examples": [{'input': {'x1': 2, 'x2': 44}, 'output': 11}],
        });
    fs.writeFileSync('json/993.json', json);
}
doit();
