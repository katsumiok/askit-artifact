import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/431.json')) {
        console.log("Skipping 431")
        return;
    }
    // measure time
    const f = define<number, {}>('Dora wants to buy a skipping rope that costs $6, a board game that costs $11, and a playground ball that costs $2. She has saved $2 from her allowance, and her mother gave her $16. How much more money does Dora need to buy the skipping rope, the game, and the ball?', [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 431,
        "question": 'Dora wants to buy a skipping rope that costs $6, a board game that costs $11, and a playground ball that costs $2. She has saved $2 from her allowance, and her mother gave her $16. How much more money does Dora need to buy the skipping rope, the game, and the ball?',
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json/431.json', json);
}
doit();
