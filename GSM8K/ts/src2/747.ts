import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/747.json')) {
        console.log("Skipping 747")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A tomato vendor decides to switch who he buys his tomatoes for.  He sells {{x1}} tomatoes a day.  He used to buy them for $.5 each but he gets a new vendor who sells them for $.4 each.  How much money does he save a week?', [], [{'input': {'x1': 500}, 'output': 350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 747,
        "question": 'A tomato vendor decides to switch who he buys his tomatoes for.  He sells 500 tomatoes a day.  He used to buy them for $.5 each but he gets a new vendor who sells them for $.4 each.  How much money does he save a week?',
        "answer": 350,
        "examples": [{'input': {'x1': 500}, 'output': 350}],
        });
    fs.writeFileSync('json2/747.json', json);
}
doit();
