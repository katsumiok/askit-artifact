import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/159.json')) {
        console.log("Skipping 159")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Finn watches {{x1}} tadpoles swimming in the pond.  Suddenly he sees {{x2}} of them come out of hiding from under a lily pad ,then he sees {{x3}} of them hide under a rock.  How many tadpoles can Finn see in the pond now?', [], [{'input': {'x1': 11, 'x2': 6, 'x3': 2}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 11, 'x2': 6, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 159,
        "question": 'Finn watches 11 tadpoles swimming in the pond.  Suddenly he sees 6 of them come out of hiding from under a lily pad ,then he sees 2 of them hide under a rock.  How many tadpoles can Finn see in the pond now?',
        "answer": 15,
        "examples": [{'input': {'x1': 11, 'x2': 6, 'x3': 2}, 'output': 15}],
        });
    fs.writeFileSync('json2/159.json', json);
}
doit();
