import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/891.json')) {
        console.log("Skipping 891")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A whirligig spins at five times the speed of a thingamabob. A whatchamacallit spins eleven times faster than a thingamabob. A whatchamacallit spins at {{x1}} meters per second. How fast does a whirligig spin?', [], [{'input': {'x1': 121}, 'output': 55}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 121});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 55;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 891,
        "question": 'A whirligig spins at five times the speed of a thingamabob. A whatchamacallit spins eleven times faster than a thingamabob. A whatchamacallit spins at 121 meters per second. How fast does a whirligig spin?',
        "answer": 55,
        "examples": [{'input': {'x1': 121}, 'output': 55}],
        });
    fs.writeFileSync('json2/891.json', json);
}
doit();
