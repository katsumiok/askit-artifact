import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1170.json')) {
        console.log("Skipping 1170")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A wall mural has four different colors of paint in it: red, white, purple, and yellow.  There are equal amounts of red, white, and purple paint in the mural. Half the mural is yellow. If the mural used {{x1}} pints of paint in all, how many pints of red paint was used?', [], [{'input': {'x1': 12}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
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
        "id": 1170,
        "question": 'A wall mural has four different colors of paint in it: red, white, purple, and yellow.  There are equal amounts of red, white, and purple paint in the mural. Half the mural is yellow. If the mural used 12 pints of paint in all, how many pints of red paint was used?',
        "answer": 2,
        "examples": [{'input': {'x1': 12}, 'output': 2}],
        });
    fs.writeFileSync('json/1170.json', json);
}
doit();
