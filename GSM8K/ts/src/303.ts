import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/303.json')) {
        console.log("Skipping 303")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Elise has been selling her Dad's collection of {{x1}} books for three years. Each book sells at 20$, and she sold twice as many books in the first year as she has sold in the current year. There are currently {{x2}} unsold books, and her sales number this year is 45. What's the total amount of money she earned in the second year?", [], [{'input': {'x1': 250, 'x2': 50}, 'output': 1300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 250, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 303,
        "question": "Elise has been selling her Dad's collection of 250 books for three years. Each book sells at 20$, and she sold twice as many books in the first year as she has sold in the current year. There are currently 50 unsold books, and her sales number this year is 45. What's the total amount of money she earned in the second year?",
        "answer": 1300,
        "examples": [{'input': {'x1': 250, 'x2': 50}, 'output': 1300}],
        });
    fs.writeFileSync('json/303.json', json);
}
doit();
