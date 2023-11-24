import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/926.json')) {
        console.log("Skipping 926")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Colby loves going to the movies and every month his parents give him $150 to spend at the movies. Tickets for Fridays and Saturdays cost $10. Tickets for any other day cost $7. Popcorn costs $8 and boxes of candy cost $2. It is the last day of the month and it's a Friday. He wants to make sure he gets a popcorn and box of candy that night. How many movies can he see if he already saw {{x1}} movies on a Friday or Saturday, {{x2}} movies on other days, had {{x3}} tubs of popcorn, and four boxes of candy that month?", [], [{'input': {'x1': 5, 'x2': 8, 'x3': 2}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8, 'x3': 2});
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
        "id": 926,
        "question": "Colby loves going to the movies and every month his parents give him $150 to spend at the movies. Tickets for Fridays and Saturdays cost $10. Tickets for any other day cost $7. Popcorn costs $8 and boxes of candy cost $2. It is the last day of the month and it's a Friday. He wants to make sure he gets a popcorn and box of candy that night. How many movies can he see if he already saw 5 movies on a Friday or Saturday, 8 movies on other days, had 2 tubs of popcorn, and four boxes of candy that month?",
        "answer": 1,
        "examples": [{'input': {'x1': 5, 'x2': 8, 'x3': 2}, 'output': 1}],
        });
    fs.writeFileSync('json2/926.json', json);
}
doit();
