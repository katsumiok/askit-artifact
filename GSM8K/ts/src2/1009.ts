import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1009.json')) {
        console.log("Skipping 1009")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Brook Hills High School currently enrolls {{x1}} students. Half of these students are over {{x2}} years old, and one-fourth of the students over {{x3}} years old are male. The remaining half of the students are under {{x4}} years old, and one-half of the students under {{x5}} are male. In total, how many female students are enrolled at this school?', [], [{'input': {'x1': 3000, 'x2': 16, 'x3': 16, 'x4': 16, 'x5': 16}, 'output': 1875}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3000, 'x2': 16, 'x3': 16, 'x4': 16, 'x5': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1875;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1009,
        "question": 'Brook Hills High School currently enrolls 3000 students. Half of these students are over 16 years old, and one-fourth of the students over 16 years old are male. The remaining half of the students are under 16 years old, and one-half of the students under 16 are male. In total, how many female students are enrolled at this school?',
        "answer": 1875,
        "examples": [{'input': {'x1': 3000, 'x2': 16, 'x3': 16, 'x4': 16, 'x5': 16}, 'output': 1875}],
        });
    fs.writeFileSync('json2/1009.json', json);
}
doit();
