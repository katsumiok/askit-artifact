import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/413.json')) {
        console.log("Skipping 413")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Marcy makes homemade candles that she markets as 99% guaranteed not to explode. 5% of the more dangerous candles also have a defect that makes them smell like wet dog. If she makes {{x1}} candles, how many of them will both smell like wet dog and explode?', [], [{'input': {'x1': 50000}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 413,
        "question": 'Marcy makes homemade candles that she markets as 99% guaranteed not to explode. 5% of the more dangerous candles also have a defect that makes them smell like wet dog. If she makes 50000 candles, how many of them will both smell like wet dog and explode?',
        "answer": 25,
        "examples": [{'input': {'x1': 50000}, 'output': 25}],
        });
    fs.writeFileSync('json2/413.json', json);
}
doit();
