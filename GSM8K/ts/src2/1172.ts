import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1172.json')) {
        console.log("Skipping 1172")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Alice likes to count the puffs of clouds in the sky while she eats her lunch outside at school. On Monday she counts just {{x1}} puffs of clouds. Each day after that through Friday, though, she sees double the number of clouds in the sky as the day before. At the end of the week, how many clouds will she have counted in the sky at lunch across all five days?', [], [{'input': {'x1': 3}, 'output': 93}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 93;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1172,
        "question": 'Alice likes to count the puffs of clouds in the sky while she eats her lunch outside at school. On Monday she counts just 3 puffs of clouds. Each day after that through Friday, though, she sees double the number of clouds in the sky as the day before. At the end of the week, how many clouds will she have counted in the sky at lunch across all five days?',
        "answer": 93,
        "examples": [{'input': {'x1': 3}, 'output': 93}],
        });
    fs.writeFileSync('json2/1172.json', json);
}
doit();
