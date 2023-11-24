import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/115.json')) {
        console.log("Skipping 115")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Sasha notices that prices for lumber have gone up 50% in the last few months after she bought some lumber. Since she has leftovers, she decides to sell them. She has leftover ten {{x1}} x {{x2}} x {{x3}} boards that cost her $10 each. She also has five {{x4}} x {{x5}} x {{x6}} boards she bought for $16 each. If she sells them all, how much profit does she make?', [], [{'input': {'x1': 2, 'x2': 4, 'x3': 10, 'x4': 4, 'x5': 4, 'x6': 10}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4, 'x3': 10, 'x4': 4, 'x5': 4, 'x6': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 115,
        "question": 'Sasha notices that prices for lumber have gone up 50% in the last few months after she bought some lumber. Since she has leftovers, she decides to sell them. She has leftover ten 2 x 4 x 10 boards that cost her $10 each. She also has five 4 x 4 x 10 boards she bought for $16 each. If she sells them all, how much profit does she make?',
        "answer": 90,
        "examples": [{'input': {'x1': 2, 'x2': 4, 'x3': 10, 'x4': 4, 'x5': 4, 'x6': 10}, 'output': 90}],
        });
    fs.writeFileSync('json/115.json', json);
}
doit();
