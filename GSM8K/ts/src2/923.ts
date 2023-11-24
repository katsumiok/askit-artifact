import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/923.json')) {
        console.log("Skipping 923")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Lana is brewing cups of tea for her friends. She has {{x1}} cups, and she divides these into {{x2}} rows. In each row, she creates equal amounts of chamomile and mint tea cups. She then uses the remaining cups to brew a total of {{x3}} cups of cinnamon tea. How many cups of mint tea are in each row?', [], [{'input': {'x1': 27, 'x2': 3, 'x3': 15}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27, 'x2': 3, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 923,
        "question": 'Lana is brewing cups of tea for her friends. She has 27 cups, and she divides these into 3 rows. In each row, she creates equal amounts of chamomile and mint tea cups. She then uses the remaining cups to brew a total of 15 cups of cinnamon tea. How many cups of mint tea are in each row?',
        "answer": 2,
        "examples": [{'input': {'x1': 27, 'x2': 3, 'x3': 15}, 'output': 2}],
        });
    fs.writeFileSync('json2/923.json', json);
}
doit();
