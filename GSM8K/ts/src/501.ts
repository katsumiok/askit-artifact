import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/501.json')) {
        console.log("Skipping 501")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mariah’s grandma was teaching her to knit. Mariah used 1/4 of a skein of yarn. Her grandma used 1/2 of a skein of yarn. There are {{x1}} yards in a skein of yarn. How many yards of yarn did they use altogether?', [], [{'input': {'x1': 364}, 'output': 273}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 364});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 273;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 501,
        "question": 'Mariah’s grandma was teaching her to knit. Mariah used 1/4 of a skein of yarn. Her grandma used 1/2 of a skein of yarn. There are 364 yards in a skein of yarn. How many yards of yarn did they use altogether?',
        "answer": 273,
        "examples": [{'input': {'x1': 364}, 'output': 273}],
        });
    fs.writeFileSync('json/501.json', json);
}
doit();
