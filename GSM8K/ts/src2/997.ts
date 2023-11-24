import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/997.json')) {
        console.log("Skipping 997")
        return;
    }
    // measure time
    const f = define<number, {}>("Walter is collecting money for charity. First he collects $500 from his neighbors. Then he collects $1500 from a fund he set up online. His lawyer offers to donate three times as much as everyone else donates. Walter is going to tell him about his neighbors and the online fund until his friend gives him $200 as well. How much is Walter's lawyer going to contribute?", [], [{'input': {}, 'output': 6600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 997,
        "question": "Walter is collecting money for charity. First he collects $500 from his neighbors. Then he collects $1500 from a fund he set up online. His lawyer offers to donate three times as much as everyone else donates. Walter is going to tell him about his neighbors and the online fund until his friend gives him $200 as well. How much is Walter's lawyer going to contribute?",
        "answer": 6600,
        "examples": [{'input': {}, 'output': 6600}],
        });
    fs.writeFileSync('json2/997.json', json);
}
doit();
