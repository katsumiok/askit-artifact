import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1077.json')) {
        console.log("Skipping 1077")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Paul is at a train station and is waiting for his train. He isn't sure how long he needs to wait, but he knows that the fourth train scheduled to arrive at the station is the one he needs to get on. The first train is scheduled to arrive in {{x1}} minutes, and this train will stay in the station for {{x2}} minutes. The second train is to arrive half an hour after the first train leaves the station, and this second train will stay in the station for a quarter of the amount of time that the first train stayed in the station. The third train is to arrive an hour after the second train leaves the station, and this third train is to leave the station immediately after it arrives.  The fourth train will arrive {{x3}} minutes after the third train leaves, and this is the train Paul will board.  In total, how long, in minutes, will Paul wait for his train?", [], [{'input': {'x1': 10, 'x2': 20, 'x3': 20}, 'output': 145}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 20, 'x3': 20});
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
        "id": 1077,
        "question": "Paul is at a train station and is waiting for his train. He isn't sure how long he needs to wait, but he knows that the fourth train scheduled to arrive at the station is the one he needs to get on. The first train is scheduled to arrive in 10 minutes, and this train will stay in the station for 20 minutes. The second train is to arrive half an hour after the first train leaves the station, and this second train will stay in the station for a quarter of the amount of time that the first train stayed in the station. The third train is to arrive an hour after the second train leaves the station, and this third train is to leave the station immediately after it arrives.  The fourth train will arrive 20 minutes after the third train leaves, and this is the train Paul will board.  In total, how long, in minutes, will Paul wait for his train?",
        "answer": 145,
        "examples": [{'input': {'x1': 10, 'x2': 20, 'x3': 20}, 'output': 145}],
        });
    fs.writeFileSync('json2/1077.json', json);
}
doit();
