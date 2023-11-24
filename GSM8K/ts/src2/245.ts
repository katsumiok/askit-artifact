import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/245.json')) {
        console.log("Skipping 245")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are {{x1}} snails in one aquarium and {{x2}} snails in another aquarium. The difference between the number of snails in the two aquariums is twice the amount of fish in both aquariums. If both aquariums have the same number of fish in them, how many fish are there in each aquarium?', [], [{'input': {'x1': 4, 'x2': 32}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 32});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 245,
        "question": 'There are 4 snails in one aquarium and 32 snails in another aquarium. The difference between the number of snails in the two aquariums is twice the amount of fish in both aquariums. If both aquariums have the same number of fish in them, how many fish are there in each aquarium?',
        "answer": 7,
        "examples": [{'input': {'x1': 4, 'x2': 32}, 'output': 7}],
        });
    fs.writeFileSync('json2/245.json', json);
}
doit();
