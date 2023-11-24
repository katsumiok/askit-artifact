import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1079.json')) {
        console.log("Skipping 1079")
        return;
    }
    // measure time
    const f = define<number, {}>("A $2000 watch was put on sale so that Mr. Rogers bought it at 75% of its original price. He then sold the watch to his friend at 120% of the price that he bought it. What is the percentage discount obtained by Mr. Roger's friend from the original price?", [], [{'input': {}, 'output': 10}]);
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
        "id": 1079,
        "question": "A $2000 watch was put on sale so that Mr. Rogers bought it at 75% of its original price. He then sold the watch to his friend at 120% of the price that he bought it. What is the percentage discount obtained by Mr. Roger's friend from the original price?",
        "answer": 10,
        "examples": [{'input': {}, 'output': 10}],
        });
    fs.writeFileSync('json/1079.json', json);
}
doit();
