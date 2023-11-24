import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1188.json')) {
        console.log("Skipping 1188")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Digimon had its 20th anniversary.  When it came out John was twice as old as Jim.  If John is {{x1}} now how old is Jim?', [], [{'input': {'x1': 28}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 28});
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
        "id": 1188,
        "question": 'Digimon had its 20th anniversary.  When it came out John was twice as old as Jim.  If John is 28 now how old is Jim?',
        "answer": 24,
        "examples": [{'input': {'x1': 28}, 'output': 24}],
        });
    fs.writeFileSync('json/1188.json', json);
}
doit();
