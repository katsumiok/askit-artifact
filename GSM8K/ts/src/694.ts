import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/694.json')) {
        console.log("Skipping 694")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tomorrow, {{x1}} adults and {{x2}} babies will be attending a function at Mia’s restaurant. The restaurant has {{x3}} times as many regular chairs as high chairs. If there are {{x4}} high chairs, how many more chairs does she have to get?', [], [{'input': {'x1': 42, 'x2': 15, 'x3': 5, 'x4': 8}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 42, 'x2': 15, 'x3': 5, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 694,
        "question": 'Tomorrow, 42 adults and 15 babies will be attending a function at Mia’s restaurant. The restaurant has 5 times as many regular chairs as high chairs. If there are 8 high chairs, how many more chairs does she have to get?',
        "answer": 9,
        "examples": [{'input': {'x1': 42, 'x2': 15, 'x3': 5, 'x4': 8}, 'output': 9}],
        });
    fs.writeFileSync('json/694.json', json);
}
doit();
