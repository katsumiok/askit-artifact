import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/316.json')) {
        console.log("Skipping 316")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Solomon bought {{x1}} marbles from his friend Johanna and added them to a store that had 50. If his father also gave him 2/5 times as many marbles as he bought from Johanna, and each marble weighs 2kgs, calculate the total weight of marbles Solomon has in the store.', [], [{'input': {'x1': 20}, 'output': 156}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 156;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 316,
        "question": 'Solomon bought 20 marbles from his friend Johanna and added them to a store that had 50. If his father also gave him 2/5 times as many marbles as he bought from Johanna, and each marble weighs 2kgs, calculate the total weight of marbles Solomon has in the store.',
        "answer": 156,
        "examples": [{'input': {'x1': 20}, 'output': 156}],
        });
    fs.writeFileSync('json2/316.json', json);
}
doit();
