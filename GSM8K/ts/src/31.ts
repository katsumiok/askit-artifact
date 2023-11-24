import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/31.json')) {
        console.log("Skipping 31")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Gunter is trying to count the jelly beans in a jar. He asks his friends how many they think are in the jar. One says 80. Another says {{x1}} more than half the first one. A third says 25% more than the first one. What is their average guess?', [], [{'input': {'x1': 20}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 31,
        "question": 'Gunter is trying to count the jelly beans in a jar. He asks his friends how many they think are in the jar. One says 80. Another says 20 more than half the first one. A third says 25% more than the first one. What is their average guess?',
        "answer": 80,
        "examples": [{'input': {'x1': 20}, 'output': 80}],
        });
    fs.writeFileSync('json/31.json', json);
}
doit();
