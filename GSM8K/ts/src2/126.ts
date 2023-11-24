import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/126.json')) {
        console.log("Skipping 126")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Dylan needed chicken sausages and fish sausages to make sausage buns at a party. He bought {{x1}} chicken sausages and {{x2}} more fish sausages than chicken sausages. How many sausages did Dylan buy in all?', [], [{'input': {'x1': 38, 'x2': 6}, 'output': 82}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 38, 'x2': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 82;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 126,
        "question": 'Dylan needed chicken sausages and fish sausages to make sausage buns at a party. He bought 38 chicken sausages and 6 more fish sausages than chicken sausages. How many sausages did Dylan buy in all?',
        "answer": 82,
        "examples": [{'input': {'x1': 38, 'x2': 6}, 'output': 82}],
        });
    fs.writeFileSync('json2/126.json', json);
}
doit();
