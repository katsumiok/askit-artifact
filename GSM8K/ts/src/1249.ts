import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1249.json')) {
        console.log("Skipping 1249")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("The power goes out in Brianna's house one night so she and her family gather all their candles and flashlights. There are {{x1}} rooms in the house and {{x2}} people living there, including Brianna. There is a flashlight for every person to carry and two for each room. They have a variety of candles available; {{x3}} small candles each for half the rooms and {{x4}} medium candles each for the other half of the rooms. With everything combined, how many candles and flashlights are Brianna's family using when the lights go out?", [], [{'input': {'x1': 8, 'x2': 4, 'x3': 4, 'x4': 5}, 'output': 56}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 4, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 56;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1249,
        "question": "The power goes out in Brianna's house one night so she and her family gather all their candles and flashlights. There are 8 rooms in the house and 4 people living there, including Brianna. There is a flashlight for every person to carry and two for each room. They have a variety of candles available; 4 small candles each for half the rooms and 5 medium candles each for the other half of the rooms. With everything combined, how many candles and flashlights are Brianna's family using when the lights go out?",
        "answer": 56,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 4, 'x4': 5}, 'output': 56}],
        });
    fs.writeFileSync('json/1249.json', json);
}
doit();
