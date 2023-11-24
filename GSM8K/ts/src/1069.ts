import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1069.json')) {
        console.log("Skipping 1069")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mr Hezekiah had {{x1}} trucks from his store supplying fertiliser to different farmers in his hometown dispatched for delivery on a particular day. Each truck was carrying {{x2}} tons of fertiliser packed in bags. Two hours after the trucks had departed for delivery, Mr Hezekiah got the news that a quarter of the number of lorries dispatched for delivery had mechanical failures on the road and could not deliver the fertilisers to the farmers. Calculate the total number of tons of fertiliser that reached the farmers that day?', [], [{'input': {'x1': 20, 'x2': 20}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1069,
        "question": 'Mr Hezekiah had 20 trucks from his store supplying fertiliser to different farmers in his hometown dispatched for delivery on a particular day. Each truck was carrying 20 tons of fertiliser packed in bags. Two hours after the trucks had departed for delivery, Mr Hezekiah got the news that a quarter of the number of lorries dispatched for delivery had mechanical failures on the road and could not deliver the fertilisers to the farmers. Calculate the total number of tons of fertiliser that reached the farmers that day?',
        "answer": 300,
        "examples": [{'input': {'x1': 20, 'x2': 20}, 'output': 300}],
        });
    fs.writeFileSync('json/1069.json', json);
}
doit();
