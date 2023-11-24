import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/52.json')) {
        console.log("Skipping 52")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Uriah's book bag is getting too heavy for him. He needs to remove {{x1}} pounds from it. His comic books weigh 1/4 pound each and his toys weigh 1/2 pound each. If he removes {{x2}} comic books, how many toys does he need to remove?", [], [{'input': {'x1': 15, 'x2': 30}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 30});
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
        "id": 52,
        "question": "Uriah's book bag is getting too heavy for him. He needs to remove 15 pounds from it. His comic books weigh 1/4 pound each and his toys weigh 1/2 pound each. If he removes 30 comic books, how many toys does he need to remove?",
        "answer": 15,
        "examples": [{'input': {'x1': 15, 'x2': 30}, 'output': 15}],
        });
    fs.writeFileSync('json2/52.json', json);
}
doit();
