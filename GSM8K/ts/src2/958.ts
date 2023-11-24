import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/958.json')) {
        console.log("Skipping 958")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Courtney attended a concert and reported that the audience was {{x1}} in number. However, Kelly went to the same concert and said that Courtney had made the mistake of overstating the number of people in attendance by 20%. If Kelly was right, how many people really attended the concert?', [], [{'input': {'x1': 48}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 48});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 958,
        "question": 'Courtney attended a concert and reported that the audience was 48 in number. However, Kelly went to the same concert and said that Courtney had made the mistake of overstating the number of people in attendance by 20%. If Kelly was right, how many people really attended the concert?',
        "answer": 40,
        "examples": [{'input': {'x1': 48}, 'output': 40}],
        });
    fs.writeFileSync('json2/958.json', json);
}
doit();
