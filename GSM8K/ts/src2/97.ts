import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/97.json')) {
        console.log("Skipping 97")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('When Freda cooks canned tomatoes into sauce, they lose half their volume. Each {{x1}} ounce can of tomatoes that she uses contains three tomatoes. Freda’s last batch of tomato sauce made {{x2}} ounces of sauce. How many tomatoes did Freda use?', [], [{'input': {'x1': 16, 'x2': 32}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 32});
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
        "id": 97,
        "question": 'When Freda cooks canned tomatoes into sauce, they lose half their volume. Each 16 ounce can of tomatoes that she uses contains three tomatoes. Freda’s last batch of tomato sauce made 32 ounces of sauce. How many tomatoes did Freda use?',
        "answer": 12,
        "examples": [{'input': {'x1': 16, 'x2': 32}, 'output': 12}],
        });
    fs.writeFileSync('json2/97.json', json);
}
doit();
