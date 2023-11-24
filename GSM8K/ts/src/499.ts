import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/499.json')) {
        console.log("Skipping 499")
        return;
    }
    // measure time
    const f = define<number, {}>('Mark is trying to choose between two venues for a surprise party for his wife.  The first venue charges a flat fee of $200, regardless of how many guests attend.  While the second charges, $25 per person who attends.  However, the first venue does not include food, which Mark estimates will cost $5 for each person who attends.  At the second venue, food for each guest is already included in the price.  How many guests are necessary for the two venues to be equal in cost?', [], [{'input': {}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 499,
        "question": 'Mark is trying to choose between two venues for a surprise party for his wife.  The first venue charges a flat fee of $200, regardless of how many guests attend.  While the second charges, $25 per person who attends.  However, the first venue does not include food, which Mark estimates will cost $5 for each person who attends.  At the second venue, food for each guest is already included in the price.  How many guests are necessary for the two venues to be equal in cost?',
        "answer": 10,
        "examples": [{'input': {}, 'output': 10}],
        });
    fs.writeFileSync('json/499.json', json);
}
doit();
