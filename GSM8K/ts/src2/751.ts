import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/751.json')) {
        console.log("Skipping 751")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Gunther, the gorilla, had {{x1}} bananas hidden under a fern branch.  When Gunther wasn't looking, Arnold, the chimpanzee, stole half of the bananas from the pile.  The next day, Gunther added another {{x2}} bananas to his pile, but later that evening, Arnold stole another {{x3}} of the bananas.  On the third day, Gunther added another {{x4}} bananas to his pile and began counting bananas.  How many bananas did Gunther find were in the pile?", [], [{'input': {'x1': 48, 'x2': 25, 'x3': 12, 'x4': 6}, 'output': 43}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 48, 'x2': 25, 'x3': 12, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 43;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 751,
        "question": "Gunther, the gorilla, had 48 bananas hidden under a fern branch.  When Gunther wasn't looking, Arnold, the chimpanzee, stole half of the bananas from the pile.  The next day, Gunther added another 25 bananas to his pile, but later that evening, Arnold stole another 12 of the bananas.  On the third day, Gunther added another 6 bananas to his pile and began counting bananas.  How many bananas did Gunther find were in the pile?",
        "answer": 43,
        "examples": [{'input': {'x1': 48, 'x2': 25, 'x3': 12, 'x4': 6}, 'output': 43}],
        });
    fs.writeFileSync('json2/751.json', json);
}
doit();
