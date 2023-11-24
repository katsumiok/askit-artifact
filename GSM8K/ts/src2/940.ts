import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/940.json')) {
        console.log("Skipping 940")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("For the children's day celebration, children are to perform mass drills in the presence of the President of the country. They stand {{x1}} in a row and there are {{x2}} rows each for {{x3}} different Schools. How many children can there be in the drill?", [], [{'input': {'x1': 8, 'x2': 7, 'x3': 5}, 'output': 280}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 7, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 280;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 940,
        "question": "For the children's day celebration, children are to perform mass drills in the presence of the President of the country. They stand 8 in a row and there are 7 rows each for 5 different Schools. How many children can there be in the drill?",
        "answer": 280,
        "examples": [{'input': {'x1': 8, 'x2': 7, 'x3': 5}, 'output': 280}],
        });
    fs.writeFileSync('json2/940.json', json);
}
doit();
