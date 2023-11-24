import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1271.json')) {
        console.log("Skipping 1271")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A large bag of Starbursts candy has {{x1}} pieces of individually wrapped candies.  If this bag has {{x2}} red candies, twice that amount of orange candies and half as many yellow candies as red candies, how many candies are pink?', [], [{'input': {'x1': 232, 'x2': 54}, 'output': 43}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 232, 'x2': 54});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 43;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1271,
        "question": 'A large bag of Starbursts candy has 232 pieces of individually wrapped candies.  If this bag has 54 red candies, twice that amount of orange candies and half as many yellow candies as red candies, how many candies are pink?',
        "answer": 43,
        "examples": [{'input': {'x1': 232, 'x2': 54}, 'output': 43}],
        });
    fs.writeFileSync('json2/1271.json', json);
}
doit();
