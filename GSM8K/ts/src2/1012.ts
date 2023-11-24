import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1012.json')) {
        console.log("Skipping 1012")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Maria was charging her power bank before going to the park when she disconnected it and noticed the power bank wasn’t fully charged yet. Once at the park, her friends asked her if they could charge their phones. While charging her friends’ phones, she noticed that her power bank was losing 9% of the total capacity each hour. {{x1}} hours later the battery started to lose instead 7% of the total capacity each hour for about {{x2}} hours. In the end, the charge remaining was 28%. What was the charge of the power bank when Maria went out to the park?', [], [{'input': {'x1': 5, 'x2': 3}, 'output': 94}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 94;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1012,
        "question": 'Maria was charging her power bank before going to the park when she disconnected it and noticed the power bank wasn’t fully charged yet. Once at the park, her friends asked her if they could charge their phones. While charging her friends’ phones, she noticed that her power bank was losing 9% of the total capacity each hour. 5 hours later the battery started to lose instead 7% of the total capacity each hour for about 3 hours. In the end, the charge remaining was 28%. What was the charge of the power bank when Maria went out to the park?',
        "answer": 94,
        "examples": [{'input': {'x1': 5, 'x2': 3}, 'output': 94}],
        });
    fs.writeFileSync('json2/1012.json', json);
}
doit();
