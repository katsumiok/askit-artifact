import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/530.json')) {
        console.log("Skipping 530")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('After tracking his workout routine for {{x1}} weeks, Josh discovered that he had spent {{x2}} hours working out every week except on some occasions. At one point, he spent {{x3}} hours each for two consecutive weeks. Another time, he spent {{x4}} hours in one week. What is the total number of hours he has spent working out across the {{x5}} weeks?', [], [{'input': {'x1': 8, 'x2': 4, 'x3': 5, 'x4': 6, 'x5': 8}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 5, 'x4': 6, 'x5': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 530,
        "question": 'After tracking his workout routine for 8 weeks, Josh discovered that he had spent 4 hours working out every week except on some occasions. At one point, he spent 5 hours each for two consecutive weeks. Another time, he spent 6 hours in one week. What is the total number of hours he has spent working out across the 8 weeks?',
        "answer": 36,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 5, 'x4': 6, 'x5': 8}, 'output': 36}],
        });
    fs.writeFileSync('json2/530.json', json);
}
doit();
