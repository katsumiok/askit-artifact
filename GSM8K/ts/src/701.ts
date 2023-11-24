import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/701.json')) {
        console.log("Skipping 701")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Aiden and {{x1}} of his friends are going to see a film at the cinema, and meet up with {{x2}} more friends there. They each save a seat and then buy enough drinks and snacks to fill the seats. Each seat has enough room to hold one person, two drinks, and three snacks. If drinks and snacks cost $2 each, how much money, in dollars, has the group spent overall on snacks and drinks?', [], [{'input': {'x1': 12, 'x2': 7}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 7});
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
        "id": 701,
        "question": 'Aiden and 12 of his friends are going to see a film at the cinema, and meet up with 7 more friends there. They each save a seat and then buy enough drinks and snacks to fill the seats. Each seat has enough room to hold one person, two drinks, and three snacks. If drinks and snacks cost $2 each, how much money, in dollars, has the group spent overall on snacks and drinks?',
        "answer": 200,
        "examples": [{'input': {'x1': 12, 'x2': 7}, 'output': 200}],
        });
    fs.writeFileSync('json/701.json', json);
}
doit();
