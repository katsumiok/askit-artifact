import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1231.json')) {
        console.log("Skipping 1231")
        return;
    }
    // measure time
    const f = define<number, {}>('Sally received the following scores on her math quizzes: 50, 80, 80, 60, 40, 90, 100, 70, and 60. Find her mean score.', [], [{'input': {}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1231,
        "question": 'Sally received the following scores on her math quizzes: 50, 80, 80, 60, 40, 90, 100, 70, and 60. Find her mean score.',
        "answer": 70,
        "examples": [{'input': {}, 'output': 70}],
        });
    fs.writeFileSync('json2/1231.json', json);
}
doit();
