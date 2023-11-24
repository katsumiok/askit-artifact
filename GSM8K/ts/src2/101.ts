import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/101.json')) {
        console.log("Skipping 101")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Solo has to read {{x1}} pages from his Science textbook, {{x2}} pages from his Social Studies textbook, {{x3}} pages from his History textbook and {{x4}} pages from his Geography textbook. Solo read {{x5}} pages on Monday. If he has {{x6}} more days to complete all his reading, how many pages does he need to read, on average, in one day?', [], [{'input': {'x1': 4, 'x2': 20, 'x3': 7, 'x4': 8, 'x5': 15, 'x6': 4}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 20, 'x3': 7, 'x4': 8, 'x5': 15, 'x6': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 101,
        "question": 'Solo has to read 4 pages from his Science textbook, 20 pages from his Social Studies textbook, 7 pages from his History textbook and 8 pages from his Geography textbook. Solo read 15 pages on Monday. If he has 4  more days to complete all his reading, how many pages does he need to read, on average, in one day?',
        "answer": 6,
        "examples": [{'input': {'x1': 4, 'x2': 20, 'x3': 7, 'x4': 8, 'x5': 15, 'x6': 4}, 'output': 6}],
        });
    fs.writeFileSync('json2/101.json', json);
}
doit();
