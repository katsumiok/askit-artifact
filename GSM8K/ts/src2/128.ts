import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/128.json')) {
        console.log("Skipping 128")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Well's mother sells watermelons, peppers, and oranges at the local store. A watermelon costs three times what each pepper costs. An orange costs {{x1}} less than what a watermelon cost. Dillon is sent to the store to buy {{x2}} watermelons, {{x3}} peppers, and {{x4}} oranges. What's the total amount of money he will spend if each pepper costs 15$?", [], [{'input': {'x1': 5, 'x2': 4, 'x3': 20, 'x4': 10}, 'output': 880}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4, 'x3': 20, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 880;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 128,
        "question": "Well's mother sells watermelons, peppers, and oranges at the local store. A watermelon costs three times what each pepper costs. An orange costs 5 less than what a watermelon cost. Dillon is sent to the store to buy 4 watermelons, 20 peppers, and 10 oranges. What's the total amount of money he will spend if each pepper costs 15$?",
        "answer": 880,
        "examples": [{'input': {'x1': 5, 'x2': 4, 'x3': 20, 'x4': 10}, 'output': 880}],
        });
    fs.writeFileSync('json2/128.json', json);
}
doit();
