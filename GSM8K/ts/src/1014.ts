import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1014.json')) {
        console.log("Skipping 1014")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jamaar loves fresh fruit and is headed to the store with $10 he earned mowing lawns. Including tax, peaches and pears are $.5 each, apples are $.75 each, kiwis are $1, and plums cost $.25 each. If he has already purchased {{x1}} peaches, {{x2}} pears, {{x3}} kiwis, and {{x4}} apples, how many plums can he buy?', [], [{'input': {'x1': 3, 'x2': 4, 'x3': 2, 'x4': 5}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4, 'x3': 2, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1014,
        "question": 'Jamaar loves fresh fruit and is headed to the store with $10 he earned mowing lawns. Including tax, peaches and pears are $.5 each, apples are $.75 each, kiwis are $1, and plums cost $.25 each. If he has already purchased 3 peaches, 4 pears, 2 kiwis, and 5 apples, how many plums can he buy?',
        "answer": 3,
        "examples": [{'input': {'x1': 3, 'x2': 4, 'x3': 2, 'x4': 5}, 'output': 3}],
        });
    fs.writeFileSync('json/1014.json', json);
}
doit();
