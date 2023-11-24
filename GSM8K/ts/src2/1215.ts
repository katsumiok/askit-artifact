import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1215.json')) {
        console.log("Skipping 1215")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Tim enters a competition and has to try and guess the number of red jelly beans in a jar.  The jar has a square base and is {{x1}} inches by {{x2}} inches and {{x3}} inches tall.  He knows that a jelly bean is .15 cubic inches.  He also knows that they get about 80% efficiency in packing.  He estimates 30% of the jelly beans are red.  The true number of red jelly beans in the container is 900.  How far off was his guess?', [], [{'input': {'x1': 6, 'x2': 6, 'x3': 15}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 6, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1215,
        "question": 'Tim enters a competition and has to try and guess the number of red jelly beans in a jar.  The jar has a square base and is 6 inches by 6 inches and 15 inches tall.  He knows that a jelly bean is .15 cubic inches.  He also knows that they get about 80% efficiency in packing.  He estimates 30% of the jelly beans are red.  The true number of red jelly beans in the container is 900.  How far off was his guess?',
        "answer": 36,
        "examples": [{'input': {'x1': 6, 'x2': 6, 'x3': 15}, 'output': 36}],
        });
    fs.writeFileSync('json2/1215.json', json);
}
doit();
