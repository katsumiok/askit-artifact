import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/920.json')) {
        console.log("Skipping 920")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Larry loves taking care of animals.  He has {{x1}} cats.  He has {{x2}} times as many dogs as cats.  He has {{x3}} fewer rabbits than dogs.  He has a fish tank with three times the number of fish as rabbits.  He also has a collection of gerbils that's 1/3 the number of fish he has.  How many pets does Larry have?", [], [{'input': {'x1': 3, 'x2': 3, 'x3': 2}, 'output': 47}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 47;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 920,
        "question": "Larry loves taking care of animals.  He has 3 cats.  He has 3 times as many dogs as cats.  He has 2 fewer rabbits than dogs.  He has a fish tank with three times the number of fish as rabbits.  He also has a collection of gerbils that's 1/3 the number of fish he has.  How many pets does Larry have?",
        "answer": 47,
        "examples": [{'input': {'x1': 3, 'x2': 3, 'x3': 2}, 'output': 47}],
        });
    fs.writeFileSync('json2/920.json', json);
}
doit();
