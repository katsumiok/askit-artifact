import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/340.json')) {
        console.log("Skipping 340")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Josh decides to take up juggling to perform at the school talent show a month in the future.  He starts off practicing juggling {{x1}} balls, and slowly gets better adding {{x2}} ball to his juggling act each week.  After the end of the fourth week the talent show begins, but when Josh walks on stage he slips and drops three of his balls. {{x3}} of them are caught by people in the crowd as they roll off the stage, but one gets lost completely since the auditorium is dark.  With a sigh, Josh starts to juggle on stage with how many balls?', [], [{'input': {'x1': 3, 'x2': 1, 'x3': 2}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 1, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 340,
        "question": 'Josh decides to take up juggling to perform at the school talent show a month in the future.  He starts off practicing juggling 3 balls, and slowly gets better adding 1 ball to his juggling act each week.  After the end of the fourth week the talent show begins, but when Josh walks on stage he slips and drops three of his balls.  2 of them are caught by people in the crowd as they roll off the stage, but one gets lost completely since the auditorium is dark.  With a sigh, Josh starts to juggle on stage with how many balls?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 1, 'x3': 2}, 'output': 4}],
        });
    fs.writeFileSync('json2/340.json', json);
}
doit();
