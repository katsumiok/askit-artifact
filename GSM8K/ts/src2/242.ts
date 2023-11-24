import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/242.json')) {
        console.log("Skipping 242")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Mike was a pen pal with {{x1}} people.  He stopped being penpals with {{x2}} of them.  They each send {{x3}} letters a week that are {{x4}} pages long.  He responds in kind.  He can write a page every {{x5}} minutes.  How many hours does he spend writing a week?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 2, 'x4': 5, 'x5': 6}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 2, 'x4': 5, 'x5': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 242,
        "question": 'Mike was a pen pal with 5 people.  He stopped being penpals with 2 of them.  They each send 2 letters a week that are 5 pages long.  He responds in kind.  He can write a page every 6 minutes.  How many hours does he spend writing a week?',
        "answer": 3,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 2, 'x4': 5, 'x5': 6}, 'output': 3}],
        });
    fs.writeFileSync('json2/242.json', json);
}
doit();
