import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/455.json')) {
        console.log("Skipping 455")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Bob needs to buy potting soil to fill the raised beds in his vegetable garden. He has {{x1}} raised beds, and each bed is {{x2}} feet wide by {{x3}} feet long by {{x4}} feet tall. Each bag of potting soil holds {{x5}} cubic feet of soil and costs $12. How much will the potting soil cost him?', [], [{'input': {'x1': 10, 'x2': 2, 'x3': 8, 'x4': 2, 'x5': 2}, 'output': 1920}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 2, 'x3': 8, 'x4': 2, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1920;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 455,
        "question": 'Bob needs to buy potting soil to fill the raised beds in his vegetable garden. He has 10 raised beds, and each bed is 2 feet wide by 8 feet long by 2 feet tall. Each bag of potting soil holds 2 cubic feet of soil and costs $12. How much will the potting soil cost him?',
        "answer": 1920,
        "examples": [{'input': {'x1': 10, 'x2': 2, 'x3': 8, 'x4': 2, 'x5': 2}, 'output': 1920}],
        });
    fs.writeFileSync('json/455.json', json);
}
doit();
