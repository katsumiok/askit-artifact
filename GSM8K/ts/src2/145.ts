import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/145.json')) {
        console.log("Skipping 145")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John has {{x1}} hectares of a pineapple field. There are {{x2}} pineapples per hectare. John can harvest his pineapples every {{x3}} months. How many pineapples can John harvest within a year?', [], [{'input': {'x1': 10, 'x2': 100, 'x3': 3}, 'output': 4000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 100, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 145,
        "question": 'John has 10 hectares of a pineapple field. There are 100 pineapples per hectare. John can harvest his pineapples every 3 months. How many pineapples can John harvest within a year?',
        "answer": 4000,
        "examples": [{'input': {'x1': 10, 'x2': 100, 'x3': 3}, 'output': 4000}],
        });
    fs.writeFileSync('json2/145.json', json);
}
doit();
