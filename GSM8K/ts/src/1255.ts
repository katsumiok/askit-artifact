import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1255.json')) {
        console.log("Skipping 1255")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Crista's plants need to be watered every day. She has {{x1}} plants. {{x2}} of her plants need half of a cup of water. {{x3}} plants need {{x4}} cup of water. The rest need a quarter of a cup of water. How many cups of water does Crista need every day for her plants?", [], [{'input': {'x1': 20, 'x2': 4, 'x3': 8, 'x4': 1}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 4, 'x3': 8, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1255,
        "question": "Crista's plants need to be watered every day. She has 20 plants. 4 of her plants need half of a cup of water. 8 plants need 1 cup of water. The rest need a quarter of a cup of water. How many cups of water does Crista need every day for her plants?",
        "answer": 12,
        "examples": [{'input': {'x1': 20, 'x2': 4, 'x3': 8, 'x4': 1}, 'output': 12}],
        });
    fs.writeFileSync('json/1255.json', json);
}
doit();
