import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/76.json')) {
        console.log("Skipping 76")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Cecilia just bought a new puppy. According to her veterinarian, she has to feed the puppy {{x1}} cup of dog food every day for the first {{x2}} days. Then she has to feed the puppy {{x3}} cups of dog food every day for the rest of its life. If one bag of dog food contains {{x4}} cups, how many bags of dog food will Cecilia use in the first year?', [], [{'input': {'x1': 1, 'x2': 180, 'x3': 2, 'x4': 110}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 180, 'x3': 2, 'x4': 110});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 76,
        "question": 'Cecilia just bought a new puppy. According to her veterinarian, she has to feed the puppy 1 cup of dog food every day for the first 180 days. Then she has to feed the puppy 2 cups of dog food every day for the rest of its life. If one bag of dog food contains 110 cups, how many bags of dog food will Cecilia use in the first year?',
        "answer": 5,
        "examples": [{'input': {'x1': 1, 'x2': 180, 'x3': 2, 'x4': 110}, 'output': 5}],
        });
    fs.writeFileSync('json2/76.json', json);
}
doit();
