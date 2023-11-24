import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1247.json')) {
        console.log("Skipping 1247")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Brendan has a bag of marbles with {{x1}} inside. He tripped over a pebble while carrying it and dropped half of them. He scrambled to search for them but only came up with 3. When he went back home, he inspected the marbles further. One of them he picked up wasn't a marble, but actually a bead so he got rid of it. How many marbles did Brendan end up with?", [], [{'input': {'x1': 10}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1247,
        "question": "Brendan has a bag of marbles with 10 inside. He tripped over a pebble while carrying it and dropped half of them. He scrambled to search for them but only came up with 3. When he went back home, he inspected the marbles further. One of them he picked up wasn't a marble, but actually a bead so he got rid of it. How many marbles did Brendan end up with?",
        "answer": 7,
        "examples": [{'input': {'x1': 10}, 'output': 7}],
        });
    fs.writeFileSync('json/1247.json', json);
}
doit();
