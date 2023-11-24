import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/323.json')) {
        console.log("Skipping 323")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Shannon makes herself iced coffee by brewing hot coffee and adding ice cubes. Each ice cube cools the coffee by {{x1}} degrees but makes the coffee {{x2}} milliliters weaker. Any added liquid also weakens the coffee. How many milliliters weaker is Shannon’s iced coffee when it is cooled by {{x3}} degrees and she adds {{x4}} milliliters of cream?', [], [{'input': {'x1': 13, 'x2': 12, 'x3': 65, 'x4': 15}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 13, 'x2': 12, 'x3': 65, 'x4': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 323,
        "question": 'Shannon makes herself iced coffee by brewing hot coffee and adding ice cubes. Each ice cube cools the coffee by 13 degrees but makes the coffee 12 milliliters weaker. Any added liquid also weakens the coffee. How many milliliters weaker is Shannon’s iced coffee when it is cooled by 65 degrees and she adds 15 milliliters of cream?',
        "answer": 75,
        "examples": [{'input': {'x1': 13, 'x2': 12, 'x3': 65, 'x4': 15}, 'output': 75}],
        });
    fs.writeFileSync('json/323.json', json);
}
doit();
