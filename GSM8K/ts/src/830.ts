import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/830.json')) {
        console.log("Skipping 830")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Britany records {{x1}} 4-minute TikTok videos each week. She spends {{x2}} hours a week writing amateur songs to sing on TikTok, and {{x3}} minutes six days a week doing her makeup before filming herself for TikTok. How much time does Britany spend on TikTok in a month with four weeks?', [], [{'input': {'x1': 18, 'x2': 2, 'x3': 15}, 'output': 1128}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18, 'x2': 2, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1128;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 830,
        "question": 'Britany records 18 4-minute TikTok videos each week. She spends 2 hours a week writing amateur songs to sing on TikTok, and 15 minutes six days a week doing her makeup before filming herself for TikTok. How much time does Britany spend on TikTok in a month with four weeks?',
        "answer": 1128,
        "examples": [{'input': {'x1': 18, 'x2': 2, 'x3': 15}, 'output': 1128}],
        });
    fs.writeFileSync('json/830.json', json);
}
doit();
