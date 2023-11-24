import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/789.json')) {
        console.log("Skipping 789")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Carson lives in an old house where the pipes will freeze if the temperature inside the house falls below {{x1}} degrees. Every log of wood Carson burns heats the house up by {{x2}} degrees. If it was {{x3}} degrees during the day, and it's {{x4}} degrees colder during the night compared to the day, how many logs does Carson need to burn to prevent the pipes from freezing?", [], [{'input': {'x1': 32, 'x2': 5, 'x3': 45, 'x4': 33}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 5, 'x3': 45, 'x4': 33});
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
        "id": 789,
        "question": "Carson lives in an old house where the pipes will freeze if the temperature inside the house falls below 32 degrees. Every log of wood Carson burns heats the house up by 5 degrees. If it was 45 degrees during the day, and it's 33 degrees colder during the night compared to the day, how many logs does Carson need to burn to prevent the pipes from freezing?",
        "answer": 4,
        "examples": [{'input': {'x1': 32, 'x2': 5, 'x3': 45, 'x4': 33}, 'output': 4}],
        });
    fs.writeFileSync('json/789.json', json);
}
doit();
