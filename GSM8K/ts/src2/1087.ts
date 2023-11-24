import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1087.json')) {
        console.log("Skipping 1087")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A farmer is baling hay in their field. Each hour the farmer makes {{x1}} bales. At the same time, a truck is picking the hay bales up. Each hour the truck picks up {{x2}} bales of hay. If the farmer and the truck driver put in a {{x3}} hour day, how many bales of hay are left in the field?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 6}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1087,
        "question": 'A farmer is baling hay in their field. Each hour the farmer makes 5 bales. At the same time, a truck is picking the hay bales up. Each hour the truck picks up 3 bales of hay. If the farmer and the truck driver put in a 6 hour day, how many bales of hay are left in the field?',
        "answer": 12,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 6}, 'output': 12}],
        });
    fs.writeFileSync('json2/1087.json', json);
}
doit();
