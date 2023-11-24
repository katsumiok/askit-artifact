import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/729.json')) {
        console.log("Skipping 729")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("At 8:00, {{x1}} people lined up at a polling station to cast their vote on election day. By midday 2/5 of the people had voted and by 16:00 2/3 of the remaining people had voted. What's the number of those who had not voted by 16:00?", [], [{'input': {'x1': 5000}, 'output': 1000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 729,
        "question": "At 8:00, 5000 people lined up at a polling station to cast their vote on election day. By midday 2/5 of the people had voted and by 16:00 2/3 of the remaining people had voted. What's the number of those who had not voted by 16:00?",
        "answer": 1000,
        "examples": [{'input': {'x1': 5000}, 'output': 1000}],
        });
    fs.writeFileSync('json2/729.json', json);
}
doit();
