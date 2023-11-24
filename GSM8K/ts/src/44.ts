import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/44.json')) {
        console.log("Skipping 44")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Charlie wants to sell beeswax candles.  For every pound of beeswax, he can make {{x1}} tapered candles.  One pound of beeswax and the wicks cost $10.00 in supplies.   If he sells each candle for $2.00 each, what is his net profit if he makes and sells {{x2}} candles?', [], [{'input': {'x1': 10, 'x2': 20}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 44,
        "question": 'Charlie wants to sell beeswax candles.  For every pound of beeswax, he can make 10 tapered candles.  One pound of beeswax and the wicks cost $10.00 in supplies.   If he sells each candle for $2.00 each, what is his net profit if he makes and sells 20 candles?',
        "answer": 20,
        "examples": [{'input': {'x1': 10, 'x2': 20}, 'output': 20}],
        });
    fs.writeFileSync('json/44.json', json);
}
doit();
