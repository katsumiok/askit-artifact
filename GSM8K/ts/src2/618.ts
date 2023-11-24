import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/618.json')) {
        console.log("Skipping 618")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The school auditorium has {{x1}} rows of seats. There are {{x2}} seats in each row. One-fourth of the seats were occupied by the administrators. One-third of the remaining seats were occupied by the parents and the rest were occupied by the students. How many students were there in the school auditorium?', [], [{'input': {'x1': 4, 'x2': 18}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 18});
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
        "id": 618,
        "question": 'The school auditorium has 4 rows of seats. There are 18 seats in each row. One-fourth of the seats were occupied by the administrators. One-third of the remaining seats were occupied by the parents and the rest were occupied by the students. How many students were there in the school auditorium?',
        "answer": 36,
        "examples": [{'input': {'x1': 4, 'x2': 18}, 'output': 36}],
        });
    fs.writeFileSync('json2/618.json', json);
}
doit();
