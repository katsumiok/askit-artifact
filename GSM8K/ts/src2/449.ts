import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/449.json')) {
        console.log("Skipping 449")
        return;
    }
    // measure time
    const f = define<number, {}>('Beatrice bought ten packets of crayons for her Art class. Six of the packets had eight pieces of colors each, and the other four packets had sixteen pieces of colors each. How many colors of crayons did Beatrice buy in all?', [], [{'input': {}, 'output': 112}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 112;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 449,
        "question": 'Beatrice bought ten packets of crayons for her Art class. Six of the packets had eight pieces of colors each, and the other four packets had sixteen pieces of colors each. How many colors of crayons did Beatrice buy in all?',
        "answer": 112,
        "examples": [{'input': {}, 'output': 112}],
        });
    fs.writeFileSync('json2/449.json', json);
}
doit();
