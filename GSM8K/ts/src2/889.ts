import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/889.json')) {
        console.log("Skipping 889")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Joelle has {{x1}} orchids and {{x2}} African daisies on her balcony.  If the orchids have {{x3}} petals and daisies have {{x4}} petals, how many more petals do the daisies have compared to the orchids?', [], [{'input': {'x1': 5, 'x2': 4, 'x3': 5, 'x4': 10}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4, 'x3': 5, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 889,
        "question": 'Joelle has 5 orchids and 4 African daisies on her balcony.  If the orchids have 5 petals and daisies have 10 petals, how many more petals do the daisies have compared to the orchids?',
        "answer": 15,
        "examples": [{'input': {'x1': 5, 'x2': 4, 'x3': 5, 'x4': 10}, 'output': 15}],
        });
    fs.writeFileSync('json2/889.json', json);
}
doit();
