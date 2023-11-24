import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/406.json')) {
        console.log("Skipping 406")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("At Allan's house, there is twice as much corn as cannolis. He has a total of {{x1}} cannolis in his house. Allan bought {{x2}} more cannolis at the store and {{x3}} fewer corns than the number of cannolis. Find the combined total of the number of corns and cannolis Allan has in the house?", [], [{'input': {'x1': 40, 'x2': 60, 'x3': 40}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 60, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 406,
        "question": "At Allan's house, there is twice as much corn as cannolis. He has a total of 40 cannolis in his house. Allan bought 60 more cannolis at the store and 40 fewer corns than the number of cannolis. Find the combined total of the number of corns and cannolis Allan has in the house?",
        "answer": 200,
        "examples": [{'input': {'x1': 40, 'x2': 60, 'x3': 40}, 'output': 200}],
        });
    fs.writeFileSync('json2/406.json', json);
}
doit();
