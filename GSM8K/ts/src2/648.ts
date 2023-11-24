import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/648.json')) {
        console.log("Skipping 648")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Howie wants to buy cupcakes for everyone in his class as a special treat. He's not sure if people will want vanilla or chocolate cupcakes so he decides to get one of each for everyone. If he gets the same amount of {{x1}} cupcakes for each himself, his teacher, and his {{x2}} classmates, how many cupcakes should Howie buy?", [], [{'input': {'x1': 2, 'x2': 25}, 'output': 54}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 54;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 648,
        "question": "Howie wants to buy cupcakes for everyone in his class as a special treat. He's not sure if people will want vanilla or chocolate cupcakes so he decides to get one of each for everyone. If he gets the same amount of 2 cupcakes for each himself, his teacher, and his 25 classmates, how many cupcakes should Howie buy?",
        "answer": 54,
        "examples": [{'input': {'x1': 2, 'x2': 25}, 'output': 54}],
        });
    fs.writeFileSync('json2/648.json', json);
}
doit();
