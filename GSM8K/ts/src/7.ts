import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/7.json')) {
        console.log("Skipping 7")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Carla is downloading a {{x1}} GB file. Normally she can download {{x2}} GB/minute, but 40% of the way through the download, Windows forces a restart to install updates, which takes {{x3}} minutes. Then Carla has to restart the download from the beginning. How load does it take to download the file?', [], [{'input': {'x1': 200, 'x2': 2, 'x3': 20}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 2, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 7,
        "question": 'Carla is downloading a 200 GB file. Normally she can download 2 GB/minute, but 40% of the way through the download, Windows forces a restart to install updates, which takes 20 minutes. Then Carla has to restart the download from the beginning. How load does it take to download the file?',
        "answer": 160,
        "examples": [{'input': {'x1': 200, 'x2': 2, 'x3': 20}, 'output': 160}],
        });
    fs.writeFileSync('json/7.json', json);
}
doit();
