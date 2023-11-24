import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1071.json')) {
        console.log("Skipping 1071")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Kayla is having her birthday party at a movie theater. The fee to rent the theater is $125 for a party of 20, plus $6 for each additional guest. Kayla invited her {{x1}} classmates and the {{x2}} girls in her dance class, as well as {{x3}} family members. Only {{x4}} people said they could not come. How much will the party cost?', [], [{'input': {'x1': 25, 'x2': 7, 'x3': 13, 'x4': 4}, 'output': 251}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 7, 'x3': 13, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 251;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1071,
        "question": 'Kayla is having her birthday party at a movie theater. The fee to rent the theater is $125 for a party of 20, plus $6 for each additional guest. Kayla invited her 25 classmates and the 7 girls in her dance class, as well as 13 family members. Only 4 people said they could not come. How much will the party cost?',
        "answer": 251,
        "examples": [{'input': {'x1': 25, 'x2': 7, 'x3': 13, 'x4': 4}, 'output': 251}],
        });
    fs.writeFileSync('json/1071.json', json);
}
doit();
