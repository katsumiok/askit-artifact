import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/759.json')) {
        console.log("Skipping 759")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The number of songs in a playlist is 300. If John has {{x1}} such playlists, and each song is {{x2}} hours long, how many hours will the {{x3}} playlists last in total?', [], [{'input': {'x1': 20, 'x2': 10, 'x3': 20}, 'output': 60000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 10, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 759,
        "question": 'The number of songs in a playlist is 300. If John has 20 such playlists, and each song is 10 hours long, how many hours will the 20 playlists last in total?',
        "answer": 60000,
        "examples": [{'input': {'x1': 20, 'x2': 10, 'x3': 20}, 'output': 60000}],
        });
    fs.writeFileSync('json/759.json', json);
}
doit();
