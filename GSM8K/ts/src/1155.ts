import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1155.json')) {
        console.log("Skipping 1155")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John buys a cassette with {{x1}} songs.  The first song is {{x2}} minutes and the second song is 60% longer.  How much time was the total cassette?', [], [{'input': {'x1': 2, 'x2': 5}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1155,
        "question": 'John buys a cassette with 2 songs.  The first song is 5 minutes and the second song is 60% longer.  How much time was the total cassette?',
        "answer": 13,
        "examples": [{'input': {'x1': 2, 'x2': 5}, 'output': 13}],
        });
    fs.writeFileSync('json/1155.json', json);
}
doit();
