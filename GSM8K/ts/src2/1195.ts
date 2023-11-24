import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1195.json')) {
        console.log("Skipping 1195")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mr. Maxim works at The Best Cookeries Around restaurant. On a particular day, {{x1}} people entered the restaurant in the morning to eat. At around 10:00, {{x2}} more people entered the restaurant and ordered the same amount of food as the first people. After a while, twice the number of people who entered the restaurant at 10:00 came in and ordered lunch. By evening, an additional {{x3}} times as many people as the number that came in first had entered the restaurant. Calculate the total number of people that entered the restaurant on that day.', [], [{'input': {'x1': 50, 'x2': 40, 'x3': 3}, 'output': 320}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 40, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 320;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1195,
        "question": 'Mr. Maxim works at The Best Cookeries Around restaurant. On a particular day, 50 people entered the restaurant in the morning to eat. At around 10:00, 40 more people entered the restaurant and ordered the same amount of food as the first people. After a while, twice the number of people who entered the restaurant at 10:00 came in and ordered lunch. By evening, an additional 3 times as many people as the number that came in first had entered the restaurant. Calculate the total number of people that entered the restaurant on that day.',
        "answer": 320,
        "examples": [{'input': {'x1': 50, 'x2': 40, 'x3': 3}, 'output': 320}],
        });
    fs.writeFileSync('json2/1195.json', json);
}
doit();
