import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/425.json')) {
        console.log("Skipping 425")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Lillian's garden doesn't have any bird feeders in it so she wants to add some. She builds {{x1}} and buys {{x2}} others. Each bird feeder seems to attract {{x3}} birds throughout the day until Lillian notices that the birds seem to prefer the feeders she made herself which attract {{x4}} more birds each than the store-bought ones. How many birds can Lillian expect to see in her garden each day if the same amount keep coming to her bird feeders?", [], [{'input': {'x1': 3, 'x2': 3, 'x3': 20, 'x4': 10}, 'output': 150}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3, 'x3': 20, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 150;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 425,
        "question": "Lillian's garden doesn't have any bird feeders in it so she wants to add some. She builds 3 and buys 3 others. Each bird feeder seems to attract 20 birds throughout the day until Lillian notices that the birds seem to prefer the feeders she made herself which attract 10 more birds each than the store-bought ones. How many birds can Lillian expect to see in her garden each day if the same amount keep coming to her bird feeders?",
        "answer": 150,
        "examples": [{'input': {'x1': 3, 'x2': 3, 'x3': 20, 'x4': 10}, 'output': 150}],
        });
    fs.writeFileSync('json2/425.json', json);
}
doit();
