import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1148.json')) {
        console.log("Skipping 1148")
        return;
    }
    // measure time
    const f = define<number, {}>("Chatty prepared three dozen eggs for her four children's Easter activity. Assuming each child gets the same number of eggs, how many eggs does each child receive?", [], [{'input': {}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1148,
        "question": "Chatty prepared three dozen eggs for her four children's Easter activity. Assuming each child gets the same number of eggs, how many eggs does each child receive?",
        "answer": 9,
        "examples": [{'input': {}, 'output': 9}],
        });
    fs.writeFileSync('json2/1148.json', json);
}
doit();
