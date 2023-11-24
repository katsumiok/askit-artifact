import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/819.json')) {
        console.log("Skipping 819")
        return;
    }
    // measure time
    const f = define<number, {}>('Twenty students are working together to raise money for a charity. Each earns the same amount. The charity raises a total of $175,000. $50,000 comes from organizations and the rest from the students. How much did each student raise?', [], [{'input': {}, 'output': 6250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 819,
        "question": 'Twenty students are working together to raise money for a charity. Each earns the same amount. The charity raises a total of $175,000. $50,000 comes from organizations and the rest from the students. How much did each student raise?',
        "answer": 6250,
        "examples": [{'input': {}, 'output': 6250}],
        });
    fs.writeFileSync('json/819.json', json);
}
doit();
