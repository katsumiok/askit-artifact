import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/476.json')) {
        console.log("Skipping 476")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Sarah went to buy books from the store and spent $300 on the books. If each book was $15 and she gave an equal number of books to her {{x1}} kids, how many books did each child get?', [], [{'input': {'x1': 4}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 476,
        "question": 'Sarah went to buy books from the store and spent $300 on the books. If each book was $15 and she gave an equal number of books to her 4 kids, how many books did each child get?',
        "answer": 5,
        "examples": [{'input': {'x1': 4}, 'output': 5}],
        });
    fs.writeFileSync('json/476.json', json);
}
doit();
