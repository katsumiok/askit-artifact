import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/79.json')) {
        console.log("Skipping 79")
        return;
    }
    // measure time
    const f = define<number, {}>('John adopts a dog.  He takes the dog to the groomer, which costs $100.  The groomer offers him a 30% discount for being a new customer.  How much does the grooming cost?', [], [{'input': {}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 79,
        "question": 'John adopts a dog.  He takes the dog to the groomer, which costs $100.  The groomer offers him a 30% discount for being a new customer.  How much does the grooming cost?',
        "answer": 70,
        "examples": [{'input': {}, 'output': 70}],
        });
    fs.writeFileSync('json/79.json', json);
}
doit();
