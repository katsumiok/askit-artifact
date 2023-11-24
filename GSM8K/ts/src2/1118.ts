import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1118.json')) {
        console.log("Skipping 1118")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number}>('In Tate’s garden pond, there are {{x1}} male guppies, {{x2}} female guppies, {{x3}} male goldfishes, and {{x4}} female goldfishes.  He buys {{x5}} male guppies, {{x6}} female guppy, {{x7}} male goldfishes, and {{x8}} female goldfishes.  How many more female fishes than male fishes does Tate have?', [], [{'input': {'x1': 4, 'x2': 7, 'x3': 3, 'x4': 5, 'x5': 2, 'x6': 1, 'x7': 2, 'x8': 3}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 7, 'x3': 3, 'x4': 5, 'x5': 2, 'x6': 1, 'x7': 2, 'x8': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1118,
        "question": 'In Tate’s garden pond, there are 4 male guppies, 7 female guppies, 3 male goldfishes, and 5 female goldfishes.  He buys 2 male guppies, 1 female guppy, 2 male goldfishes, and 3 female goldfishes.  How many more female fishes than male fishes does Tate have?',
        "answer": 5,
        "examples": [{'input': {'x1': 4, 'x2': 7, 'x3': 3, 'x4': 5, 'x5': 2, 'x6': 1, 'x7': 2, 'x8': 3}, 'output': 5}],
        });
    fs.writeFileSync('json2/1118.json', json);
}
doit();
