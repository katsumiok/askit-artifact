import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/205.json')) {
        console.log("Skipping 205")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Brinley is in Mr. Bert's math class. Mr. Bert gives six tests each semester. He allows the students to remove the lowest score from the average each semester. If Brinley has scores of 89, 71, 92, {{x1}} and {{x2}} on the first five tests, what score does she need on the sixth test to get an average of 93?", [], [{'input': {'x1': 100, 'x2': 86}, 'output': 98}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 86});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 98;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 205,
        "question": "Brinley is in Mr. Bert's math class. Mr. Bert gives six tests each semester. He allows the students to remove the lowest score from the average each semester. If Brinley has scores of 89, 71, 92, 100 and 86 on the first five tests, what score does she need on the sixth test to get an average of 93?",
        "answer": 98,
        "examples": [{'input': {'x1': 100, 'x2': 86}, 'output': 98}],
        });
    fs.writeFileSync('json2/205.json', json);
}
doit();
