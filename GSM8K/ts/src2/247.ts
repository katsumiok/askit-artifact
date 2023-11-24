import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/247.json')) {
        console.log("Skipping 247")
        return;
    }
    // measure time
    const f = define<number, {}>('Isabelle bought party supplies for her little sister’s birthday party. She spent $12 on ingredients for the cake, $43 on birthday presents, $15 on decorations, $4 on invitations, and $22 on goodie bags for the party guests. She split the cost evenly three ways with her two parents. How many dollars did each person pay?', [], [{'input': {}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 247,
        "question": 'Isabelle bought party supplies for her little sister’s birthday party. She spent $12 on ingredients for the cake, $43 on birthday presents, $15 on decorations, $4 on invitations, and $22 on goodie bags for the party guests. She split the cost evenly three ways with her two parents. How many dollars did each person pay?',
        "answer": 32,
        "examples": [{'input': {}, 'output': 32}],
        });
    fs.writeFileSync('json2/247.json', json);
}
doit();
