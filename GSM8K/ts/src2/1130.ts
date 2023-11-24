import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1130.json')) {
        console.log("Skipping 1130")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Nik has {{x1}} crayons. He wants to separate them into groups of {{x2}} and put them into boxes.  Each box weighs {{x3}} ounces. Each crayon weighs {{x4}} ounce. If he puts all of his crayons into boxes, what is the total weight, in pounds, of the crayons and the boxes, when there are {{x5}} ounces to a pound?', [], [{'input': {'x1': 200, 'x2': 8, 'x3': 8, 'x4': 1, 'x5': 16}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 8, 'x3': 8, 'x4': 1, 'x5': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1130,
        "question": 'Nik has 200 crayons. He wants to separate them into groups of 8 and put them into boxes.  Each box weighs 8 ounces. Each crayon weighs 1 ounce. If he puts all of his crayons into boxes, what is the total weight, in pounds, of the crayons and the boxes, when there are 16 ounces to a pound?',
        "answer": 25,
        "examples": [{'input': {'x1': 200, 'x2': 8, 'x3': 8, 'x4': 1, 'x5': 16}, 'output': 25}],
        });
    fs.writeFileSync('json2/1130.json', json);
}
doit();
