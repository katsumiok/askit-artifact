import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/692.json')) {
        console.log("Skipping 692")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A certain company is in the business of selling fresh fruit. One crate of such fruit consists of {{x1}} bananas, {{x2}} apples, and {{x3}} oranges. The price for such a crate depends on the price of its individual fruits. One apple costs $0.5 and one banana costs twice as much. Oranges are the most expensive and cost three times as much as a banana per piece. What would be the price for such a crate of fruit?', [], [{'input': {'x1': 5, 'x2': 12, 'x3': 7}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 12, 'x3': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 692,
        "question": 'A certain company is in the business of selling fresh fruit. One crate of such fruit consists of 5 bananas, 12 apples, and 7 oranges. The price for such a crate depends on the price of its individual fruits. One apple costs $0.5 and one banana costs twice as much. Oranges are the most expensive and cost three times as much as a banana per piece. What would be the price for such a crate of fruit?',
        "answer": 32,
        "examples": [{'input': {'x1': 5, 'x2': 12, 'x3': 7}, 'output': 32}],
        });
    fs.writeFileSync('json2/692.json', json);
}
doit();
