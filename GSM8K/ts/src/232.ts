import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/232.json')) {
        console.log("Skipping 232")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Dax went to their farm to pick some apples and found half as many bugs as ants in the garden. If there were {{x1}} ants, calculate the total number of insects in the garden.', [], [{'input': {'x1': 50}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 232,
        "question": 'Dax went to their farm to pick some apples and found half as many bugs as ants in the garden. If there were 50 ants, calculate the total number of insects in the garden.',
        "answer": 75,
        "examples": [{'input': {'x1': 50}, 'output': 75}],
        });
    fs.writeFileSync('json/232.json', json);
}
doit();
