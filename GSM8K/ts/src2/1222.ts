import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1222.json')) {
        console.log("Skipping 1222")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Luke is buying fabric for new curtains. There are five windows. Each window is {{x1}} inches wide and Luke needs to buy fabric equal to {{x2}} times the total width of the windows. How much fabric should he buy?', [], [{'input': {'x1': 35, 'x2': 2}, 'output': 350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 35, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1222,
        "question": 'Luke is buying fabric for new curtains. There are five windows. Each window is 35 inches wide and Luke needs to buy fabric equal to 2 times the total width of the windows. How much fabric should he buy?',
        "answer": 350,
        "examples": [{'input': {'x1': 35, 'x2': 2}, 'output': 350}],
        });
    fs.writeFileSync('json2/1222.json', json);
}
doit();
