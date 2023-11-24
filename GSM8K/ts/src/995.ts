import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/995.json')) {
        console.log("Skipping 995")
        return;
    }
    // measure time
    const f = define<number, {}>('Adam bought himself some new trousers for $30. His mother gave him $6 for this purpose, and his father gave him twice as much. How much money did Adam have to contribute from his savings?', [], [{'input': {}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 995,
        "question": 'Adam bought himself some new trousers for $30. His mother gave him $6 for this purpose, and his father gave him twice as much. How much money did Adam have to contribute from his savings?',
        "answer": 12,
        "examples": [{'input': {}, 'output': 12}],
        });
    fs.writeFileSync('json/995.json', json);
}
doit();
