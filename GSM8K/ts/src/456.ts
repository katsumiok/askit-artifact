import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/456.json')) {
        console.log("Skipping 456")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('In a set of magicians cards, there are {{x1}} red cards, and 60% more green cards. Yellow cards are as many, as the sum of red and green cards. How many cards of all mentioned colors are there?', [], [{'input': {'x1': 15}, 'output': 78}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 78;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 456,
        "question": 'In a set of magicians cards, there are 15 red cards, and 60% more green cards. Yellow cards are as many, as the sum of red and green cards. How many cards of all mentioned colors are there?',
        "answer": 78,
        "examples": [{'input': {'x1': 15}, 'output': 78}],
        });
    fs.writeFileSync('json/456.json', json);
}
doit();
