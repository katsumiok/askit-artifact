import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/998.json')) {
        console.log("Skipping 998")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Dylan attended a wedding where there were {{x1}} guests in the reception. Each guest brought a plate of {{x2}} cookies. The bride decided to give 1/2 of the cookies to the church next door as a thank you for helping in the wedding reception. If each person in the church next door got {{x3}} cookies, how many people were in the church next door?', [], [{'input': {'x1': 100, 'x2': 15, 'x3': 15}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 15, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 998,
        "question": 'Dylan attended a wedding where there were 100 guests in the reception. Each guest brought a plate of 15 cookies. The bride decided to give 1/2 of the cookies to the church next door as a thank you for helping in the wedding reception. If each person in the church next door got 15 cookies, how many people were in the church next door?',
        "answer": 50,
        "examples": [{'input': {'x1': 100, 'x2': 15, 'x3': 15}, 'output': 50}],
        });
    fs.writeFileSync('json2/998.json', json);
}
doit();
