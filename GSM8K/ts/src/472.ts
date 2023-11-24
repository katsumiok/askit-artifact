import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/472.json')) {
        console.log("Skipping 472")
        return;
    }
    // measure time
    const f = define<number, {}>('Matt wants cookies for a snack, but his dad wants him to eat healthily. He tells Matt he can have half as many cookies as the number of carrot sticks he eats, plus two extra for cleaning his room. If Matt wants to eat five cookies in total, how many carrot sticks does he have to eat?', [], [{'input': {}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 472,
        "question": 'Matt wants cookies for a snack, but his dad wants him to eat healthily. He tells Matt he can have half as many cookies as the number of carrot sticks he eats, plus two extra for cleaning his room. If Matt wants to eat five cookies in total, how many carrot sticks does he have to eat?',
        "answer": 6,
        "examples": [{'input': {}, 'output': 6}],
        });
    fs.writeFileSync('json/472.json', json);
}
doit();
