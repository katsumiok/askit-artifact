import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/600.json')) {
        console.log("Skipping 600")
        return;
    }
    // measure time
    const f = define<number, {}>('Jamaal is at the gym. He has been using an 8-pound weight. He increases the weight that he uses by 50%. It turns out to be too heavy, so he uses a weight two pounds lighter than that. What is the weight, in pounds, that he now uses?', [], [{'input': {}, 'output': 10}]);
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
        "id": 600,
        "question": 'Jamaal is at the gym. He has been using an 8-pound weight. He increases the weight that he uses by 50%. It turns out to be too heavy, so he uses a weight two pounds lighter than that. What is the weight, in pounds, that he now uses?',
        "answer": 10,
        "examples": [{'input': {}, 'output': 10}],
        });
    fs.writeFileSync('json2/600.json', json);
}
doit();
