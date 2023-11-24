import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/968.json')) {
        console.log("Skipping 968")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('Andy works in the pro shop of a tennis resort. He has {{x1}} racquets that need restringing. {{x2}} of them are to be strung with synthetic gut, {{x3}} of them will be strung with polyester string, and {{x4}} of them will be strung with a hybrid set (half synthetic gut, half polyester string). How long will it take Andy to string all of those racquets if it takes him an average of {{x5}} minutes for him to string with synthetic gut, {{x6}} minutes to string with polyester string, and {{x7}} minutes for hybrid sets?', [], [{'input': {'x1': 12, 'x2': 3, 'x3': 5, 'x4': 4, 'x5': 15, 'x6': 22, 'x7': 18}, 'output': 227}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 3, 'x3': 5, 'x4': 4, 'x5': 15, 'x6': 22, 'x7': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 227;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 968,
        "question": 'Andy works in the pro shop of a tennis resort. He has 12 racquets that need restringing. 3 of them are to be strung with synthetic gut, 5 of them will be strung with polyester string, and 4 of them will be strung with a hybrid set (half synthetic gut, half polyester string). How long will it take Andy to string all of those racquets if it takes him an average of 15 minutes for him to string with synthetic gut, 22 minutes to string with polyester string, and 18 minutes for hybrid sets?',
        "answer": 227,
        "examples": [{'input': {'x1': 12, 'x2': 3, 'x3': 5, 'x4': 4, 'x5': 15, 'x6': 22, 'x7': 18}, 'output': 227}],
        });
    fs.writeFileSync('json/968.json', json);
}
doit();
