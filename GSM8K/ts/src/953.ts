import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/953.json')) {
        console.log("Skipping 953")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Kim sleepwalks, to monitor her sleeping hours, she installs a camera in her room. Kim usually goes to sleep at {{x1}} p.m. and wakes up at {{x2}} a.m. She is a sleepwalker. One day, after reviewing the cameras, she finds that she woke up that day and was sleepwalking from 2:15 to 2:38 am.  Also, that day she woke up {{x3}} minutes earlier than usual to go to the bathroom. How many minutes did she sleep on her bed that day?', [], [{'input': {'x1': 10, 'x2': 6, 'x3': 5}, 'output': 452}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 6, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 452;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 953,
        "question": 'Kim sleepwalks, to monitor her sleeping hours, she installs a camera in her room. Kim usually goes to sleep at 10 p.m. and wakes up at 6 a.m. She is a sleepwalker. One day, after reviewing the cameras, she finds that she woke up that day and was sleepwalking from 2:15 to 2:38 am.  Also, that day she woke up 5 minutes earlier than usual to go to the bathroom. How many minutes did she sleep on her bed that day?',
        "answer": 452,
        "examples": [{'input': {'x1': 10, 'x2': 6, 'x3': 5}, 'output': 452}],
        });
    fs.writeFileSync('json/953.json', json);
}
doit();
