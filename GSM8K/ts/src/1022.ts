import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1022.json')) {
        console.log("Skipping 1022")
        return;
    }
    // measure time
    const f = define<number, {}>('Teresa sells large stuffed animals for three times the price of small stuffed animals. Today, she sold twice as many small stuffed animals as large ones and earned $120 from the sales. Each small stuffed animal costs $4. How many small stuffed animals did she sell?', [], [{'input': {}, 'output': 12}]);
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
        "id": 1022,
        "question": 'Teresa sells large stuffed animals for three times the price of small stuffed animals. Today, she sold twice as many small stuffed animals as large ones and earned $120 from the sales. Each small stuffed animal costs $4. How many small stuffed animals did she sell?',
        "answer": 12,
        "examples": [{'input': {}, 'output': 12}],
        });
    fs.writeFileSync('json/1022.json', json);
}
doit();
