import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1056.json')) {
        console.log("Skipping 1056")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Greg puts clean sheets on {{x1}} twin beds and {{x2}} king size bed every week.  His laundry machine will only allow him to wash {{x3}} twin sets of sheets at a time and {{x4}} king set of sheets at a time.  How many loads of laundry does he do in a year?', [], [{'input': {'x1': 4, 'x2': 1, 'x3': 2, 'x4': 1}, 'output': 156}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 1, 'x3': 2, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 156;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1056,
        "question": 'Greg puts clean sheets on 4 twin beds and 1 king size bed every week.  His laundry machine will only allow him to wash 2 twin sets of sheets at a time and 1 king set of sheets at a time.  How many loads of laundry does he do in a year?',
        "answer": 156,
        "examples": [{'input': {'x1': 4, 'x2': 1, 'x3': 2, 'x4': 1}, 'output': 156}],
        });
    fs.writeFileSync('json/1056.json', json);
}
doit();
