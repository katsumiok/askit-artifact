import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/171.json')) {
        console.log("Skipping 171")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Jake is walking through the Museum of Entomology. He sees {{x1}} spiders with {{x2}} legs each, {{x3}} insects with {{x4}} legs each, and {{x5}} rare mutant invertebrates with {{x6}} legs each. How many legs does Jake see total?', [], [{'input': {'x1': 80, 'x2': 8, 'x3': 90, 'x4': 6, 'x5': 3, 'x6': 10}, 'output': 1210}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 8, 'x3': 90, 'x4': 6, 'x5': 3, 'x6': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1210;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 171,
        "question": 'Jake is walking through the Museum of Entomology. He sees 80 spiders with 8 legs each, 90 insects with 6 legs each, and 3 rare mutant invertebrates with 10 legs each. How many legs does Jake see total?',
        "answer": 1210,
        "examples": [{'input': {'x1': 80, 'x2': 8, 'x3': 90, 'x4': 6, 'x5': 3, 'x6': 10}, 'output': 1210}],
        });
    fs.writeFileSync('json/171.json', json);
}
doit();
