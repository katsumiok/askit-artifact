import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1159.json')) {
        console.log("Skipping 1159")
        return;
    }
    // measure time
    const f = define<number, {}>('Carla just gave birth to identical octuplets. She dresses 3/4 of them in purple and 1/4 in blue. If all the blue-wearers and 1/3 of the purple wearers also wear bows, what is the percentage chance a baby wearing a bow is wearing purple?', [], [{'input': {}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1159,
        "question": 'Carla just gave birth to identical octuplets. She dresses 3/4 of them in purple and 1/4 in blue. If all the blue-wearers and 1/3 of the purple wearers also wear bows, what is the percentage chance a baby wearing a bow is wearing purple?',
        "answer": 50,
        "examples": [{'input': {}, 'output': 50}],
        });
    fs.writeFileSync('json/1159.json', json);
}
doit();
