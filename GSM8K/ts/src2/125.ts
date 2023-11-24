import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/125.json')) {
        console.log("Skipping 125")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Julia was preparing for a dinner party at her house, where she intended to serve stew.  She noticed that she was out of plastic spoons, so she bought a new package of spoons.  Later, her husband also bought a package of {{x1}} new spoons and gave them to Julia.  While Julia was making the stew, she used three of the spoons to sample her stew.  Later, when she went to set the table, she had a total of {{x2}} spoons.  How many spoons were in the package that Julia bought?', [], [{'input': {'x1': 5, 'x2': 12}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 125,
        "question": 'Julia was preparing for a dinner party at her house, where she intended to serve stew.  She noticed that she was out of plastic spoons, so she bought a new package of spoons.  Later, her husband also bought a package of 5 new spoons and gave them to Julia.  While Julia was making the stew, she used three of the spoons to sample her stew.  Later, when she went to set the table, she had a total of 12 spoons.  How many spoons were in the package that Julia bought?',
        "answer": 10,
        "examples": [{'input': {'x1': 5, 'x2': 12}, 'output': 10}],
        });
    fs.writeFileSync('json2/125.json', json);
}
doit();
