import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1154.json')) {
        console.log("Skipping 1154")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mason likes eating carrots. If he eats {{x1}} carrots each on weekdays and {{x2}} carrots each on Saturday and Sunday, how many carrots does he eat a week?', [], [{'input': {'x1': 4, 'x2': 5}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1154,
        "question": 'Mason likes eating carrots. If he eats 4 carrots each on weekdays and 5 carrots each on Saturday and Sunday, how many carrots does he eat a week?',
        "answer": 30,
        "examples": [{'input': {'x1': 4, 'x2': 5}, 'output': 30}],
        });
    fs.writeFileSync('json/1154.json', json);
}
doit();
