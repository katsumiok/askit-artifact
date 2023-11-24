import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1086.json')) {
        console.log("Skipping 1086")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Marcel runs a bicycle store. His main products are three types of bikes: MTB, BMX, and Trekking. The price of one MTB is $500, BMX is half the price of an MTB, and a Trekking bike is $450. In one month, Marcel sold a total of {{x1}} bikes among the types listed. Half of them were Trekking bikes, and 15% were BMX bikes. The rest of the sold bikes were MTB type. How much did Marcel earn from selling bicycles during that month?', [], [{'input': {'x1': 300}, 'output': 131250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 131250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1086,
        "question": 'Marcel runs a bicycle store. His main products are three types of bikes: MTB, BMX, and Trekking. The price of one MTB is $500, BMX is half the price of an MTB, and a Trekking bike is $450. In one month, Marcel sold a total of 300 bikes among the types listed. Half of them were Trekking bikes, and 15% were BMX bikes. The rest of the sold bikes were MTB type. How much did Marcel earn from selling bicycles during that month?',
        "answer": 131250,
        "examples": [{'input': {'x1': 300}, 'output': 131250}],
        });
    fs.writeFileSync('json2/1086.json', json);
}
doit();
