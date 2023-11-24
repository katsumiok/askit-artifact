import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/802.json')) {
        console.log("Skipping 802")
        return;
    }
    // measure time
    const f = define<number, {}>('Bubbles collects stuffed animals. She has three stuffed puppies, five stuffed koalas, two stuffed zebras and four stuffed frogs. If she wants to buy enough stuffed goats, such that the percentage of stuffed goats is 30% of all of her stuffed animals, how many stuffed goats should she buy?', [], [{'input': {}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 802,
        "question": 'Bubbles collects stuffed animals. She has three stuffed puppies, five stuffed koalas, two stuffed zebras and four stuffed frogs. If she wants to buy enough stuffed goats, such that the percentage of stuffed goats is 30% of all of her stuffed animals, how many stuffed goats should she buy?',
        "answer": 6,
        "examples": [{'input': {}, 'output': 6}],
        });
    fs.writeFileSync('json2/802.json', json);
}
doit();
