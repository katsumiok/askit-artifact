import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/419.json')) {
        console.log("Skipping 419")
        return;
    }
    // measure time
    const f = define<number, {}>("Stanley was standing on the side of the mountain, at an elevation of 10,000 feet, when a gust air blew the comb out of his pocket, causing the comb to fall 4,000 feet to a ledge below.  Stanley's brother, Oliver, was also on the mountain, but he was at an elevation of 3,000 feet.  Stanley called Oliver on his cellphone and asked Oliver to find Stanley's comb.  How many feet must Oliver climb to reach the elevation of Stanley's comb?", [], [{'input': {}, 'output': 3000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 419,
        "question": "Stanley was standing on the side of the mountain, at an elevation of 10,000 feet, when a gust air blew the comb out of his pocket, causing the comb to fall 4,000 feet to a ledge below.  Stanley's brother, Oliver, was also on the mountain, but he was at an elevation of 3,000 feet.  Stanley called Oliver on his cellphone and asked Oliver to find Stanley's comb.  How many feet must Oliver climb to reach the elevation of Stanley's comb?",
        "answer": 3000,
        "examples": [{'input': {}, 'output': 3000}],
        });
    fs.writeFileSync('json2/419.json', json);
}
doit();
