import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/675.json')) {
        console.log("Skipping 675")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('James needs to get more toys for his doggie shelter. Each dog needs one toy. James currently has {{x1}} toys on hand for {{x2}} dogs, but there are {{x3}} more dogs in the shelter now. After buying the toys, he went back to see that there are twice as many more dogs than when he left so he had to buy some more toys. When James came back yet again, {{x4}} dogs were gone so he no longer needed those toys. How many toys in total does James need?', [], [{'input': {'x1': 4, 'x2': 4, 'x3': 8, 'x4': 3}, 'output': 33}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4, 'x3': 8, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 33;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 675,
        "question": 'James needs to get more toys for his doggie shelter. Each dog needs one toy. James currently has 4 toys on hand for 4 dogs, but there are 8 more dogs in the shelter now. After buying the toys, he went back to see that there are twice as many more dogs than when he left so he had to buy some more toys. When James came back yet again, 3 dogs were gone so he no longer needed those toys. How many toys in total does James need?',
        "answer": 33,
        "examples": [{'input': {'x1': 4, 'x2': 4, 'x3': 8, 'x4': 3}, 'output': 33}],
        });
    fs.writeFileSync('json/675.json', json);
}
doit();
