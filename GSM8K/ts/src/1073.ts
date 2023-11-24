import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1073.json')) {
        console.log("Skipping 1073")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mr. Robles buys {{x1}} bananas, which is enough to feed his three monkeys for a week. One monkey eats {{x2}} bananas each day. The second monkey eats {{x3}} more bananas than the first monkey and the third monkey eats the rest of the bananas for the day.  How many bananas does the third monkey eat each day?', [], [{'input': {'x1': 315, 'x2': 10, 'x3': 4}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 315, 'x2': 10, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1073,
        "question": 'Mr. Robles buys 315 bananas, which is enough to feed his three monkeys for a week. One monkey eats 10 bananas each day. The second monkey eats 4 more bananas than the first monkey and the third monkey eats the rest of the bananas for the day.  How many bananas does the third monkey eat each day?',
        "answer": 21,
        "examples": [{'input': {'x1': 315, 'x2': 10, 'x3': 4}, 'output': 21}],
        });
    fs.writeFileSync('json/1073.json', json);
}
doit();
