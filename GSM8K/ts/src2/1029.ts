import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1029.json')) {
        console.log("Skipping 1029")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('As Sally walked to school, she was holding the strings to {{x1}} red balloons, {{x2}} green balloons, and {{x3}} yellow balloons. Suddenly, a gust of wind caused 40% of the red balloons to burst.  The shockingly loud sound startled Sally, and she accidentally released half of the yellow balloons.  But as she neared the school grounds, she found {{x4}} blue balloons caught in a tree, and she added 75% of them to her remaining clutch of balloons, which she carried into the school.  What number of balloons did she finally carry into the school?', [], [{'input': {'x1': 25, 'x2': 7, 'x3': 12, 'x4': 8}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 7, 'x3': 12, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1029,
        "question": 'As Sally walked to school, she was holding the strings to 25 red balloons, 7 green balloons, and 12 yellow balloons. Suddenly, a gust of wind caused 40% of the red balloons to burst.  The shockingly loud sound startled Sally, and she accidentally released half of the yellow balloons.  But as she neared the school grounds, she found 8 blue balloons caught in a tree, and she added 75% of them to her remaining clutch of balloons, which she carried into the school.  What number of balloons did she finally carry into the school?',
        "answer": 34,
        "examples": [{'input': {'x1': 25, 'x2': 7, 'x3': 12, 'x4': 8}, 'output': 34}],
        });
    fs.writeFileSync('json2/1029.json', json);
}
doit();
