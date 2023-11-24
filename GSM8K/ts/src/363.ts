import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/363.json')) {
        console.log("Skipping 363")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("John drives to his friend's house {{x1}} miles away.  He drives at a speed of {{x2}} mph.  He had to take a detour that added {{x3}} miles to his trip.  After he gets there he takes a route home that is {{x4}} miles but he goes {{x5}} mph.  How long did the trip take?", [], [{'input': {'x1': 200, 'x2': 70, 'x3': 10, 'x4': 240, 'x5': 80}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 70, 'x3': 10, 'x4': 240, 'x5': 80});
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
        "id": 363,
        "question": "John drives to his friend's house 200 miles away.  He drives at a speed of 70 mph.  He had to take a detour that added 10 miles to his trip.  After he gets there he takes a route home that is 240 miles but he goes 80 mph.  How long did the trip take?",
        "answer": 6,
        "examples": [{'input': {'x1': 200, 'x2': 70, 'x3': 10, 'x4': 240, 'x5': 80}, 'output': 6}],
        });
    fs.writeFileSync('json/363.json', json);
}
doit();
