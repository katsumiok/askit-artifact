import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/980.json')) {
        console.log("Skipping 980")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Adrianne is collecting different kinds of beads for making bracelets. Her mother gave her {{x1}} metallic beads. Her sister gave her ten more beads than her mother, and her friend gave her twice as many as her mother gave.  How many beads did Adrianne have altogether?', [], [{'input': {'x1': 20}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 980,
        "question": 'Adrianne is collecting different kinds of beads for making bracelets. Her mother gave her 20 metallic beads. Her sister gave her ten more beads than her mother, and her friend gave her twice as many as her mother gave.  How many beads did Adrianne have altogether?',
        "answer": 90,
        "examples": [{'input': {'x1': 20}, 'output': 90}],
        });
    fs.writeFileSync('json2/980.json', json);
}
doit();
