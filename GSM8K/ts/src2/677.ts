import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/677.json')) {
        console.log("Skipping 677")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carol and Jennifer are sisters from Los Angeles who love collecting signatures from celebrities. During their summer break from school, the sisters spend every afternoon collecting signatures. After five weeks, Carol and Jennifer compare their autograph books, counting up the number of signatures each sister has collected. Carol has {{x1}} signatures in her book, and Jennifer has 44. The sisters have three more weeks of summer vacation, and they decide they want to reach {{x2}} signatures between them by the end of the summer. How many signatures do the sisters need to collect to reach their goal?', [], [{'input': {'x1': 20, 'x2': 100}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 677,
        "question": 'Carol and Jennifer are sisters from Los Angeles who love collecting signatures from celebrities. During their summer break from school, the sisters spend every afternoon collecting signatures. After five weeks, Carol and Jennifer compare their autograph books, counting up the number of signatures each sister has collected. Carol has 20 signatures in her book, and Jennifer has 44. The sisters have three more weeks of summer vacation, and they decide they want to reach 100 signatures between them by the end of the summer. How many signatures do the sisters need to collect to reach their goal?',
        "answer": 36,
        "examples": [{'input': {'x1': 20, 'x2': 100}, 'output': 36}],
        });
    fs.writeFileSync('json2/677.json', json);
}
doit();
