import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/974.json')) {
        console.log("Skipping 974")
        return;
    }
    // measure time
    const f = define<number, {}>("Tyler wants to buy a dictionary that costs $18, a dinosaur book that costs $13, and a children's cookbook that costs $8. He has saved $14 from his allowance. If Tyler earns $5 per hour, how many hours does he have to work to afford his books?", [], [{'input': {}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 974,
        "question": "Tyler wants to buy a dictionary that costs $18, a dinosaur book that costs $13, and a children's cookbook that costs $8. He has saved $14 from his allowance. If Tyler earns $5 per hour, how many hours does he have to work to afford his books?",
        "answer": 5,
        "examples": [{'input': {}, 'output': 5}],
        });
    fs.writeFileSync('json/974.json', json);
}
doit();
