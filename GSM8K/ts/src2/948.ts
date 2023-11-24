import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/948.json')) {
        console.log("Skipping 948")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Cayley markets various newspapers to get a commission on each copy sold. He gets a 10% commission on each copy of the New York Times and an 8% commission on each of the Wall Street Journal. How much commission will he earn in total from the sales of {{x1}} copies of the New York Times and {{x2}} copies of Wall Street Journal if each costs $5 and $15 respectively?', [], [{'input': {'x1': 6, 'x2': 10}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 948,
        "question": 'Cayley markets various newspapers to get a commission on each copy sold. He gets a 10% commission on each copy of the New York Times and an 8% commission on each of the Wall Street Journal. How much commission will he earn in total from the sales of 6 copies of the New York Times and 10 copies of Wall Street Journal if each costs $5 and $15 respectively?',
        "answer": 15,
        "examples": [{'input': {'x1': 6, 'x2': 10}, 'output': 15}],
        });
    fs.writeFileSync('json2/948.json', json);
}
doit();
