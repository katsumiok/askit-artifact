import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/405.json')) {
        console.log("Skipping 405")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tyson decided to make muffaletta sandwiches for the big game.  Each sandwich required {{x1}} pound each of meat and cheese and would serve {{x2}} people.  There would be {{x3}} people in total watching the game.  The meat cost $7.00 per pound and the cheese cost $3.00 per pound.  How much money would he spend on the meat and cheese to make enough sandwiches to serve {{x4}} people?', [], [{'input': {'x1': 1, 'x2': 4, 'x3': 20, 'x4': 20}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 4, 'x3': 20, 'x4': 20});
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
        "id": 405,
        "question": 'Tyson decided to make muffaletta sandwiches for the big game.  Each sandwich required 1 pound each of meat and cheese and would serve 4 people.  There would be 20 people in total watching the game.  The meat cost $7.00 per pound and the cheese cost $3.00 per pound.  How much money would he spend on the meat and cheese to make enough sandwiches to serve 20 people?',
        "answer": 50,
        "examples": [{'input': {'x1': 1, 'x2': 4, 'x3': 20, 'x4': 20}, 'output': 50}],
        });
    fs.writeFileSync('json/405.json', json);
}
doit();
