import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/197.json')) {
        console.log("Skipping 197")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('In the city of Soda, there are exactly {{x1}} inhabitants. They include {{x2}} men and {{x3}} women. The rest of the population is made up of children. How many kids are there in Soda?', [], [{'input': {'x1': 23786, 'x2': 8417, 'x3': 9092}, 'output': 6277}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 23786, 'x2': 8417, 'x3': 9092});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6277;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 197,
        "question": 'In the city of Soda, there are exactly 23786 inhabitants. They include 8417 men and 9092 women. The rest of the population is made up of children. How many kids are there in Soda?',
        "answer": 6277,
        "examples": [{'input': {'x1': 23786, 'x2': 8417, 'x3': 9092}, 'output': 6277}],
        });
    fs.writeFileSync('json2/197.json', json);
}
doit();
