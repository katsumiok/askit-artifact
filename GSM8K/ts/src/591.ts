import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/591.json')) {
        console.log("Skipping 591")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Four dogs sat in a line within the veterinarian's waiting room.  The first dog was the Affenpinscher, who weighed only {{x1}} pounds.  Next to him sat a Dachshund, who weighed twice as much as the Affenpinscher.  Next to the Dachshund sat a Papillon, who weighed one-fourth as much as the Dachshund.  And at the end of the line sat a Mastiff, who weighed {{x2}} times the weight of the Papillon.  How much did the Mastiff weigh, in pounds?", [], [{'input': {'x1': 10, 'x2': 44}, 'output': 220}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 44});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 220;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 591,
        "question": "Four dogs sat in a line within the veterinarian's waiting room.  The first dog was the Affenpinscher, who weighed only 10 pounds.  Next to him sat a Dachshund, who weighed twice as much as the Affenpinscher.  Next to the Dachshund sat a Papillon, who weighed one-fourth as much as the Dachshund.  And at the end of the line sat a Mastiff, who weighed 44 times the weight of the Papillon.  How much did the Mastiff weigh, in pounds?",
        "answer": 220,
        "examples": [{'input': {'x1': 10, 'x2': 44}, 'output': 220}],
        });
    fs.writeFileSync('json/591.json', json);
}
doit();
