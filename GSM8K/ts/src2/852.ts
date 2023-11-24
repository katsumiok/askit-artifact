import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/852.json')) {
        console.log("Skipping 852")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A basket of green food costs $25 and a basket of red food costs $18. If you buy {{x1}} baskets of green food and red food, how much will you have to pay in total if you get $2 off for each basket of red food?', [], [{'input': {'x1': 3}, 'output': 123}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 123;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 852,
        "question": 'A basket of green food costs $25 and a basket of red food costs $18. If you buy 3 baskets of green food and red food, how much will you have to pay in total if you get $2 off for each basket of red food?',
        "answer": 123,
        "examples": [{'input': {'x1': 3}, 'output': 123}],
        });
    fs.writeFileSync('json2/852.json', json);
}
doit();
