import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/826.json')) {
        console.log("Skipping 826")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('On Easter Sunday Cindy went to the city park to participate in the Easter Egg Hunt, and ended up with a basket full of eggs. She had {{x1}} green ones, twice as many blue ones as green ones, one fewer pink eggs than blue eggs, and one-third as many yellow eggs as pink eggs. How many eggs did Cindy have altogether?', [], [{'input': {'x1': 5}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 826,
        "question": 'On Easter Sunday Cindy went to the city park to participate in the Easter Egg Hunt, and ended up with a basket full of eggs. She had 5 green ones, twice as many blue ones as green ones, one fewer pink eggs than blue eggs, and one-third as many yellow eggs as pink eggs. How many eggs did Cindy have altogether?',
        "answer": 27,
        "examples": [{'input': {'x1': 5}, 'output': 27}],
        });
    fs.writeFileSync('json/826.json', json);
}
doit();
