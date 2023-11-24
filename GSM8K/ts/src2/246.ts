import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/246.json')) {
        console.log("Skipping 246")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jeans makeup artist charges her $250 an hour.  She requires very expensive makeup for a movie she is in and it takes {{x1}} hours to do each day and she needs it done {{x2}} times a week.  The movie takes {{x3}} weeks to finish.  After the movie is done the makeup artist gives Jean a 10% discount because of the amount of work done.  How much did Jean pay?', [], [{'input': {'x1': 6, 'x2': 4, 'x3': 5}, 'output': 27000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 246,
        "question": 'Jeans makeup artist charges her $250 an hour.  She requires very expensive makeup for a movie she is in and it takes 6 hours to do each day and she needs it done 4 times a week.  The movie takes 5 weeks to finish.  After the movie is done the makeup artist gives Jean a 10% discount because of the amount of work done.  How much did Jean pay?',
        "answer": 27000,
        "examples": [{'input': {'x1': 6, 'x2': 4, 'x3': 5}, 'output': 27000}],
        });
    fs.writeFileSync('json2/246.json', json);
}
doit();
