import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/181.json')) {
        console.log("Skipping 181")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Sandra, the florist around the corner, is very unhappy with Fred's incomplete order delivery. Sandra had ordered four times as many red roses as white carnations. She also ordered {{x1}} pink calla lilies, which were five times the number of white carnations. Sandra has threatened to switch suppliers if the missing red roses are not delivered by {{x2}} pm. To keep Sandra's business, how many red roses must Fred deliver by {{x3}} pm?", [], [{'input': {'x1': 200, 'x2': 5, 'x3': 5}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 5, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 181,
        "question": "Sandra, the florist around the corner, is very unhappy with Fred's incomplete order delivery. Sandra had ordered four times as many red roses as white carnations. She also ordered 200 pink calla lilies, which were five times the number of white carnations. Sandra has threatened to switch suppliers if the missing red roses are not delivered by 5 pm. To keep Sandra's business, how many red roses must Fred deliver by 5 pm?",
        "answer": 160,
        "examples": [{'input': {'x1': 200, 'x2': 5, 'x3': 5}, 'output': 160}],
        });
    fs.writeFileSync('json2/181.json', json);
}
doit();
