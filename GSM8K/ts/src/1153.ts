import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1153.json')) {
        console.log("Skipping 1153")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carlos, Jim and Carrey were at the beach playing and they decided to gather some seashells. Jim collected {{x1}} seashells, which was {{x2}} more than what Carlos collected. Carlos collected twice as many as Carrey. They gathered all their seashells and divided them equally between themselves. How many did each person get?', [], [{'input': {'x1': 27, 'x2': 5}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1153,
        "question": 'Carlos, Jim and Carrey were at the beach playing and they decided to gather some seashells. Jim collected 27 seashells, which was 5 more than what Carlos collected. Carlos collected twice as many as Carrey. They gathered all their seashells and divided them equally between themselves. How many did each person get?',
        "answer": 20,
        "examples": [{'input': {'x1': 27, 'x2': 5}, 'output': 20}],
        });
    fs.writeFileSync('json/1153.json', json);
}
doit();
