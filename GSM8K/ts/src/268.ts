import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/268.json')) {
        console.log("Skipping 268")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A real estate agent has spent $5 on each newspaper ad and spent $75 on each television ad. He bought {{x1}} newspaper ads and {{x2}} television ads. How much did the real estate agent spend on buying all the ads?', [], [{'input': {'x1': 50, 'x2': 15}, 'output': 1375}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1375;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 268,
        "question": 'A real estate agent has spent $5 on each newspaper ad and spent $75 on each television ad. He bought 50 newspaper ads and 15 television ads. How much did the real estate agent spend on buying all the ads?',
        "answer": 1375,
        "examples": [{'input': {'x1': 50, 'x2': 15}, 'output': 1375}],
        });
    fs.writeFileSync('json/268.json', json);
}
doit();
