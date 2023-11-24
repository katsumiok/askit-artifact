import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/770.json')) {
        console.log("Skipping 770")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A perfume company is trying to create new scents. They already have {{x1}} vanilla scents and {{x2}} fruity scents available and they need to decide which kind of scent to focus on. They decide to focus on whichever scent sells the most and monitor their number of sales as part of their research. By the end of the day, they sell {{x3}} of each of the vanilla scents and {{x4}} of each of the fruity scents available. How many more vanilla scents sold compared with the fruity scents?', [], [{'input': {'x1': 4, 'x2': 8, 'x3': 5, 'x4': 2}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 8, 'x3': 5, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 770,
        "question": 'A perfume company is trying to create new scents. They already have 4 vanilla scents and 8 fruity scents available and they need to decide which kind of scent to focus on. They decide to focus on whichever scent sells the most and monitor their number of sales as part of their research. By the end of the day, they sell 5 of each of the vanilla scents and 2 of each of the fruity scents available. How many more vanilla scents sold compared with the fruity scents?',
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 8, 'x3': 5, 'x4': 2}, 'output': 4}],
        });
    fs.writeFileSync('json2/770.json', json);
}
doit();
