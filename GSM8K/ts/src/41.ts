import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/41.json')) {
        console.log("Skipping 41")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("The great dragon, Perg, sat high atop mount Farbo, breathing fire upon anything within a distance of {{x1}} feet.  Polly could throw the gold javelin, the only known weapon that could sleigh the dragon, for a distance of {{x2}} feet, well within the reach of the dragon's flames.  But when Polly held the sapphire gemstone, she could throw the javelin three times farther than when not holding the gemstone. If holding the gemstone, how far outside of the reach of the dragon's flames could Polly stand and still hit the dragon with the gold javelin?", [], [{'input': {'x1': 1000, 'x2': 400}, 'output': 200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 400});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 41,
        "question": "The great dragon, Perg, sat high atop mount Farbo, breathing fire upon anything within a distance of 1000 feet.  Polly could throw the gold javelin, the only known weapon that could sleigh the dragon, for a distance of 400 feet, well within the reach of the dragon's flames.  But when Polly held the sapphire gemstone, she could throw the javelin three times farther than when not holding the gemstone. If holding the gemstone, how far outside of the reach of the dragon's flames could Polly stand and still hit the dragon with the gold javelin?",
        "answer": 200,
        "examples": [{'input': {'x1': 1000, 'x2': 400}, 'output': 200}],
        });
    fs.writeFileSync('json/41.json', json);
}
doit();
