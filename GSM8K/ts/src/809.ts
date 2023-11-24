import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/809.json')) {
        console.log("Skipping 809")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Dale is selling butterscotch candies to raise money for his club at school. He doesn't have the candies yet and is instead just taking orders. He started off with {{x1}} total that he ordered and wanted to sell, but he ended up selling {{x2}} butterscotch candies. Then he ordered {{x3}} more. How many does Dale still need to sell to sell all of his candy?", [], [{'input': {'x1': 100, 'x2': 150, 'x3': 100}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 150, 'x3': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 809,
        "question": "Dale is selling butterscotch candies to raise money for his club at school. He doesn't have the candies yet and is instead just taking orders. He started off with 100 total that he ordered and wanted to sell, but he ended up selling 150 butterscotch candies. Then he ordered 100 more. How many does Dale still need to sell to sell all of his candy?",
        "answer": 50,
        "examples": [{'input': {'x1': 100, 'x2': 150, 'x3': 100}, 'output': 50}],
        });
    fs.writeFileSync('json/809.json', json);
}
doit();
