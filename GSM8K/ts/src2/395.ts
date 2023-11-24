import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/395.json')) {
        console.log("Skipping 395")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Erica made {{x1}} Valentine's cards to pass out.  Her dad brought her {{x2}} boxes of pre-made Valentine's cards that had {{x3}} cards each.  She passed out {{x4}} to her classmates, {{x5}} to her family and received {{x6}} from family and friends.  How many Valentine's Day cards does Erica now have?", [], [{'input': {'x1': 20, 'x2': 2, 'x3': 15, 'x4': 24, 'x5': 5, 'x6': 17}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 2, 'x3': 15, 'x4': 24, 'x5': 5, 'x6': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 38;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 395,
        "question": "Erica made 20 Valentine's cards to pass out.  Her dad brought her 2 boxes of pre-made Valentine's cards that had 15 cards each.  She passed out 24 to her classmates, 5 to her family and received 17 from family and friends.  How many Valentine's Day cards does Erica now have?",
        "answer": 38,
        "examples": [{'input': {'x1': 20, 'x2': 2, 'x3': 15, 'x4': 24, 'x5': 5, 'x6': 17}, 'output': 38}],
        });
    fs.writeFileSync('json2/395.json', json);
}
doit();
