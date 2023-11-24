import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1000.json')) {
        console.log("Skipping 1000")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Doctor Jones is scheduling his time for Monday. He is spending nine hours at the clinic where he works that day. He has to do rounds to check on inpatients staying at the clinic, which takes twenty minutes per inpatient, and he has ten appointments, which take thirty minutes each. How many hours will Doctor Jones have left to update his records if he has {{x1}} inpatients at the clinic?', [], [{'input': {'x1': 9}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1000,
        "question": 'Doctor Jones is scheduling his time for Monday. He is spending nine hours at the clinic where he works that day. He has to do rounds to check on inpatients staying at the clinic, which takes twenty minutes per inpatient, and he has ten appointments, which take thirty minutes each. How many hours will Doctor Jones have left to update his records if he has 9 inpatients at the clinic?',
        "answer": 1,
        "examples": [{'input': {'x1': 9}, 'output': 1}],
        });
    fs.writeFileSync('json2/1000.json', json);
}
doit();
