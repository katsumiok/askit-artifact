import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/457.json')) {
        console.log("Skipping 457")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('While playing with her friends in their school playground, Katelyn saw {{x1}} fairies flying above the nearby forest. After about twenty minutes, one of her friends saw half as many fairies as Katelyn saw come from the east and join the fairies that were there. Ten minutes later, {{x2}} fairies flew away. How many fairies are remaining?', [], [{'input': {'x1': 50, 'x2': 30}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 457,
        "question": 'While playing with her friends in their school playground, Katelyn saw 50 fairies flying above the nearby forest. After about twenty minutes, one of her friends saw half as many fairies as Katelyn saw come from the east and join the fairies that were there. Ten minutes later, 30 fairies flew away. How many fairies are remaining?',
        "answer": 45,
        "examples": [{'input': {'x1': 50, 'x2': 30}, 'output': 45}],
        });
    fs.writeFileSync('json/457.json', json);
}
doit();
