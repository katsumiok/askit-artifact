import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/942.json')) {
        console.log("Skipping 942")
        return;
    }
    // measure time
    const f = define<number, {}>("Patty's Plumbing charges $40 to visit a house to make a repair, plus $35 per hour, or part thereof, for labor, plus parts. One job took 2.25 hours and used $60 in parts. How much did Patty charge?", [], [{'input': {}, 'output': 205}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 205;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 942,
        "question": "Patty's Plumbing charges $40 to visit a house to make a repair, plus $35 per hour, or part thereof, for labor, plus parts. One job took 2.25 hours and used $60 in parts. How much did Patty charge?",
        "answer": 205,
        "examples": [{'input': {}, 'output': 205}],
        });
    fs.writeFileSync('json2/942.json', json);
}
doit();
