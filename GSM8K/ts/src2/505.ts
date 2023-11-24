import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/505.json')) {
        console.log("Skipping 505")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number, x9: number, x10: number}>('Frederick is making popsicles to sell and to save money he is making his own popsicle sticks. He can get {{x1}} sticks from a {{x2}} x {{x3}} piece of wood and {{x4}} sticks from a {{x5}} x {{x6}} piece of wood. He has $24 to buy wood for sticks. A {{x7}} x {{x8}} costs $4. A {{x9}} x {{x10}} costs $6. What is the most popsicle sticks he can make if he buys the cheapest lumber?', [], [{'input': {'x1': 200, 'x2': 2, 'x3': 4, 'x4': 400, 'x5': 2, 'x6': 8, 'x7': 2, 'x8': 4, 'x9': 2, 'x10': 8}, 'output': 1600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 2, 'x3': 4, 'x4': 400, 'x5': 2, 'x6': 8, 'x7': 2, 'x8': 4, 'x9': 2, 'x10': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 505,
        "question": 'Frederick is making popsicles to sell and to save money he is making his own popsicle sticks. He can get 200 sticks from a 2 x 4 piece of wood and 400 sticks from a 2 x 8 piece of wood. He has $24 to buy wood for sticks. A 2 x 4 costs $4. A 2 x 8 costs $6. What is the most popsicle sticks he can make if he buys the cheapest lumber?',
        "answer": 1600,
        "examples": [{'input': {'x1': 200, 'x2': 2, 'x3': 4, 'x4': 400, 'x5': 2, 'x6': 8, 'x7': 2, 'x8': 4, 'x9': 2, 'x10': 8}, 'output': 1600}],
        });
    fs.writeFileSync('json2/505.json', json);
}
doit();
