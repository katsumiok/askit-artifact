import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1240.json')) {
        console.log("Skipping 1240")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Elly is organizing her books on the new bookcases her parents bought her. Each of the middle {{x1}} shelves can hold {{x2}} books. The bottom shelf can hold twice as many books as a middle shelf. The top shelf can hold {{x3}} fewer books than the bottom shelf. If she has {{x4}} books, how many bookcases does she need to hold all of them?', [], [{'input': {'x1': 2, 'x2': 10, 'x3': 5, 'x4': 110}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 10, 'x3': 5, 'x4': 110});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1240,
        "question": 'Elly is organizing her books on the new bookcases her parents bought her. Each of the middle 2 shelves can hold 10 books. The bottom shelf can hold twice as many books as a middle shelf. The top shelf can hold 5 fewer books than the bottom shelf. If she has 110 books, how many bookcases does she need to hold all of them?',
        "answer": 2,
        "examples": [{'input': {'x1': 2, 'x2': 10, 'x3': 5, 'x4': 110}, 'output': 2}],
        });
    fs.writeFileSync('json2/1240.json', json);
}
doit();
