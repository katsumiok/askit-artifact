import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1137.json')) {
        console.log("Skipping 1137")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Donny can only drink water if it's at least {{x1}} degrees. He has two mugs of water. One mug is {{x2}} degrees. The other is an unknown temperature. If he pours {{x3}} ounces of water from the 33-degree mug into his water bottle and one ounce from the other bottle, he is now able to drink the water.  At least how many degrees is the second bottle?", [], [{'input': {'x1': 40, 'x2': 33, 'x3': 4}, 'output': 68}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 33, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 68;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1137,
        "question": "Donny can only drink water if it's at least 40 degrees. He has two mugs of water. One mug is 33 degrees. The other is an unknown temperature. If he pours 4 ounces of water from the 33-degree mug into his water bottle and one ounce from the other bottle, he is now able to drink the water.  At least how many degrees is the second bottle?",
        "answer": 68,
        "examples": [{'input': {'x1': 40, 'x2': 33, 'x3': 4}, 'output': 68}],
        });
    fs.writeFileSync('json/1137.json', json);
}
doit();
