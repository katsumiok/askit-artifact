import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/43.json')) {
        console.log("Skipping 43")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('According to its nutritional info, a bag of chips has {{x1}} calories per serving. If a 300g bag has {{x2}} servings, how many grams can you eat if your daily calorie target is {{x3}} and you have already consumed {{x4}} calories?', [], [{'input': {'x1': 250, 'x2': 5, 'x3': 2000, 'x4': 1800}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 250, 'x2': 5, 'x3': 2000, 'x4': 1800});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 43,
        "question": 'According to its nutritional info, a bag of chips has 250 calories per serving. If a 300g bag has 5 servings, how many grams can you eat if your daily calorie target is 2000 and you have already consumed 1800 calories?',
        "answer": 48,
        "examples": [{'input': {'x1': 250, 'x2': 5, 'x3': 2000, 'x4': 1800}, 'output': 48}],
        });
    fs.writeFileSync('json/43.json', json);
}
doit();
