import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/899.json')) {
        console.log("Skipping 899")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Susan made {{x1}} cookies for Christmas and was going to equally divide them between her {{x2}} nephews. Before Susan could package them, her husband snuck {{x3}} cookies for himself. How many cookies will each of Susan’s nephews get?', [], [{'input': {'x1': 100, 'x2': 6, 'x3': 4}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 6, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 899,
        "question": 'Susan made 100 cookies for Christmas and was going to equally divide them between her 6 nephews. Before Susan could package them, her husband snuck 4 cookies for himself. How many cookies will each of Susan’s nephews get?',
        "answer": 16,
        "examples": [{'input': {'x1': 100, 'x2': 6, 'x3': 4}, 'output': 16}],
        });
    fs.writeFileSync('json2/899.json', json);
}
doit();
