import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/203.json')) {
        console.log("Skipping 203")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Carl’s favorite food is cheese. He ate a sandwich every day this week for lunch and used {{x1}} slices of cheese on each sandwich. He ate cheese and egg omelets for breakfast {{x2}} days in the week using one more slice per omelet than he did per sandwich. He made a big dish of macaroni and cheese to last him several dinners for the week and used {{x3}} slices of cheese in it. How many slices of cheese did he use?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 8}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 203,
        "question": 'Carl’s favorite food is cheese. He ate a sandwich every day this week for lunch and used 2 slices of cheese on each sandwich. He ate cheese and egg omelets for breakfast 3 days in the week using one more slice per omelet than he did per sandwich. He made a big dish of macaroni and cheese to last him several dinners for the week and used 8 slices of cheese in it. How many slices of cheese did he use?',
        "answer": 31,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 8}, 'output': 31}],
        });
    fs.writeFileSync('json2/203.json', json);
}
doit();
