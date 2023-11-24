import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/442.json')) {
        console.log("Skipping 442")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("When Marcus wakes up, his house is {{x1}} degrees. He spends {{x2}} hours baking, and every hour the oven is on it raises the house's temperature by {{x3}} degrees. Then Marcus opens a window for {{x4}} minutes, and the house cools down {{x5}} degrees for every {{x6}} minutes the window is open. What is the house's final temperature?", [], [{'input': {'x1': 40, 'x2': 3, 'x3': 5, 'x4': 30, 'x5': 2, 'x6': 10}, 'output': 49}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 3, 'x3': 5, 'x4': 30, 'x5': 2, 'x6': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 49;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 442,
        "question": "When Marcus wakes up, his house is 40 degrees. He spends 3 hours baking, and every hour the oven is on it raises the house's temperature by 5 degrees. Then Marcus opens a window for 30 minutes, and the house cools down 2 degrees for every 10 minutes the window is open. What is the house's final temperature?",
        "answer": 49,
        "examples": [{'input': {'x1': 40, 'x2': 3, 'x3': 5, 'x4': 30, 'x5': 2, 'x6': 10}, 'output': 49}],
        });
    fs.writeFileSync('json/442.json', json);
}
doit();
