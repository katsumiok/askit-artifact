import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1171.json')) {
        console.log("Skipping 1171")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Tom has {{x1}} bedrooms in his house.  They measure {{x2}} by {{x3}} feet each.  The living room is {{x4}} times bigger than one bedroom.  The rest of the house is {{x5}} square feet.  What is the total area, in square feet, of the house?', [], [{'input': {'x1': 4, 'x2': 20, 'x3': 12, 'x4': 5, 'x5': 1000}, 'output': 3160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 20, 'x3': 12, 'x4': 5, 'x5': 1000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1171,
        "question": 'Tom has 4 bedrooms in his house.  They measure 20 by 12 feet each.  The living room is 5 times bigger than one bedroom.  The rest of the house is 1000 square feet.  What is the total area, in square feet, of the house?',
        "answer": 3160,
        "examples": [{'input': {'x1': 4, 'x2': 20, 'x3': 12, 'x4': 5, 'x5': 1000}, 'output': 3160}],
        });
    fs.writeFileSync('json2/1171.json', json);
}
doit();
