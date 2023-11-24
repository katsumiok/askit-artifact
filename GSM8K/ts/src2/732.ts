import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/732.json')) {
        console.log("Skipping 732")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Dora's father's age is eight more than twice Dora's age. If Dora's mother is four years younger than Dora's father, and Dora is {{x1}} years old, calculate the total combined age of Dora, her father, and her mother.", [], [{'input': {'x1': 15}, 'output': 87}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 87;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 732,
        "question": "Dora's father's age is eight more than twice Dora's age. If Dora's mother is four years younger than Dora's father, and Dora is 15 years old, calculate the total combined age of Dora, her father, and her mother.",
        "answer": 87,
        "examples": [{'input': {'x1': 15}, 'output': 87}],
        });
    fs.writeFileSync('json2/732.json', json);
}
doit();
