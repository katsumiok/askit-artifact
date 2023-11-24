import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/403.json')) {
        console.log("Skipping 403")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mel uses a 900-watt air conditioner for {{x1}} hours a day. This means that each hour the AC uses {{x2}} watts of energy. If he reduces the time he uses the air conditioner by {{x3}} hours a day, how many kilowatts of electric energy will he save in {{x4}} days?', [], [{'input': {'x1': 8, 'x2': 900, 'x3': 5, 'x4': 30}, 'output': 81}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 900, 'x3': 5, 'x4': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 81;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 403,
        "question": 'Mel uses a 900-watt air conditioner for 8 hours a day. This means that each hour the AC uses 900 watts of energy. If he reduces the time he uses the air conditioner by 5 hours a day, how many kilowatts of electric energy will he save in 30 days?',
        "answer": 81,
        "examples": [{'input': {'x1': 8, 'x2': 900, 'x3': 5, 'x4': 30}, 'output': 81}],
        });
    fs.writeFileSync('json/403.json', json);
}
doit();
