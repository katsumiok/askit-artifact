import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1058.json')) {
        console.log("Skipping 1058")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Leo collects stickers. Two years ago, he had {{x1}} stickers in his collection. Last year, Leo collected {{x2}} stickers. This year, he collected twice the number of stickers as the previous year. How many stickers does Leo have in his collection?', [], [{'input': {'x1': 100, 'x2': 50}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1058,
        "question": 'Leo collects stickers. Two years ago, he had 100 stickers in his collection. Last year, Leo collected 50 stickers. This year, he collected twice the number of stickers as the previous year. How many stickers does Leo have in his collection?',
        "answer": 250,
        "examples": [{'input': {'x1': 100, 'x2': 50}, 'output': 250}],
        });
    fs.writeFileSync('json/1058.json', json);
}
doit();
