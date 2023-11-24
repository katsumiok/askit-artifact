import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/206.json')) {
        console.log("Skipping 206")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Micheal loves riding a bike. He rode it at least {{x1}} times a week and makes {{x2}} kilometers each time. He did that for four weeks, and then he decided, to ride the bike only {{x3}} times a week, but for {{x4}} kilometers each time, and he did that for {{x5}} weeks. How many kilometers did Micheal do in total?', [], [{'input': {'x1': 5, 'x2': 25, 'x3': 2, 'x4': 60, 'x5': 3}, 'output': 860}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 25, 'x3': 2, 'x4': 60, 'x5': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 860;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 206,
        "question": 'Micheal loves riding a bike. He rode it at least 5 times a week and makes 25 kilometers each time. He did that for four weeks, and then he decided, to ride the bike only 2 times a week, but for 60 kilometers each time, and he did that for 3 weeks. How many kilometers did Micheal do in total?',
        "answer": 860,
        "examples": [{'input': {'x1': 5, 'x2': 25, 'x3': 2, 'x4': 60, 'x5': 3}, 'output': 860}],
        });
    fs.writeFileSync('json2/206.json', json);
}
doit();
