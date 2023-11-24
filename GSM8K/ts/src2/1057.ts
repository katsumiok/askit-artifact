import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1057.json')) {
        console.log("Skipping 1057")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jill and her friends watch {{x1}} movies every Saturday and half the number of movies on Sunday than on Saturday. If they watch movies every weekend, how many movies can they watch in {{x2}} weeks?', [], [{'input': {'x1': 4, 'x2': 4}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1057,
        "question": 'Jill and her friends watch 4 movies every Saturday and half the number of movies on Sunday than on Saturday. If they watch movies every weekend, how many movies can they watch in 4 weeks?',
        "answer": 24,
        "examples": [{'input': {'x1': 4, 'x2': 4}, 'output': 24}],
        });
    fs.writeFileSync('json2/1057.json', json);
}
doit();
