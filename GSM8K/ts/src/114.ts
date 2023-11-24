import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/114.json')) {
        console.log("Skipping 114")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jamal's phone can hold {{x1}} times more photographs than can Brittany's phone.  The maximum number of photographs that Brittany's phone can hold is {{x2}} times more than the number of birds in Jamal's photograph of the ducks at the zoo.  If Jamal's phone can hold {{x3}} photographs, how many ducks can be seen in Jamal's photograph of ducks at the zoo?", [], [{'input': {'x1': 6, 'x2': 50, 'x3': 1800}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 50, 'x3': 1800});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 114,
        "question": "Jamal's phone can hold 6 times more photographs than can Brittany's phone.  The maximum number of photographs that Brittany's phone can hold is 50 times more than the number of birds in Jamal's photograph of the ducks at the zoo.  If Jamal's phone can hold 1800 photographs, how many ducks can be seen in Jamal's photograph of ducks at the zoo?",
        "answer": 6,
        "examples": [{'input': {'x1': 6, 'x2': 50, 'x3': 1800}, 'output': 6}],
        });
    fs.writeFileSync('json/114.json', json);
}
doit();
