import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/481.json')) {
        console.log("Skipping 481")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Belen has two kinds of pennies, a {{x1}} penny and a {{x2}} penny. The {{x3}} penny is three-quarters of the weight of the {{x4}} penny. If the {{x5}} penny weighs {{x6}} grains, what is the combined weight of the two pennies?', [], [{'input': {'x1': 2010, 'x2': 1959, 'x3': 2010, 'x4': 1959, 'x5': 1959, 'x6': 48}, 'output': 84}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2010, 'x2': 1959, 'x3': 2010, 'x4': 1959, 'x5': 1959, 'x6': 48});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 84;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 481,
        "question": 'Belen has two kinds of pennies, a 2010 penny and a 1959 penny. The 2010 penny is three-quarters of the weight of the 1959 penny. If the 1959 penny weighs 48 grains, what is the combined weight of the two pennies?',
        "answer": 84,
        "examples": [{'input': {'x1': 2010, 'x2': 1959, 'x3': 2010, 'x4': 1959, 'x5': 1959, 'x6': 48}, 'output': 84}],
        });
    fs.writeFileSync('json2/481.json', json);
}
doit();
