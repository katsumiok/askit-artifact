import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/696.json')) {
        console.log("Skipping 696")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Students in class 3B are collecting school points for behavior. If they get enough points in total, they can go on a trip. In the class, there are Adam, Martha, Betty, and Tom. Adam has collected {{x1}} points. Betty was better than Adam and collected 30% more. Marta managed to collect {{x2}} times more points than Tom, who has {{x3}} points less than Betty. How many points is the class missing to go on the trip if the minimum threshold is {{x4}} points?', [], [{'input': {'x1': 50, 'x2': 3, 'x3': 30, 'x4': 400}, 'output': 145}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 3, 'x3': 30, 'x4': 400});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 145;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 696,
        "question": 'Students in class 3B are collecting school points for behavior. If they get enough points in total, they can go on a trip. In the class, there are Adam, Martha, Betty, and Tom. Adam has collected 50 points. Betty was better than Adam and collected 30% more. Marta managed to collect 3 times more points than Tom, who has 30 points less than Betty. How many points is the class missing to go on the trip if the minimum threshold is 400 points?',
        "answer": 145,
        "examples": [{'input': {'x1': 50, 'x2': 3, 'x3': 30, 'x4': 400}, 'output': 145}],
        });
    fs.writeFileSync('json2/696.json', json);
}
doit();
