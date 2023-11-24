import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1005.json')) {
        console.log("Skipping 1005")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The population of porcupines in a park is 50. The number of female porcupines is 3/5 of the total population. If each female porcupine gives birth to {{x1}} babies every month, how many porcupines will be in the park after a year?', [], [{'input': {'x1': 4}, 'output': 1490}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1490;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1005,
        "question": 'The population of porcupines in a park is 50. The number of female porcupines is 3/5 of the total population. If each female porcupine gives birth to 4 babies every month, how many porcupines will be in the park after a year?',
        "answer": 1490,
        "examples": [{'input': {'x1': 4}, 'output': 1490}],
        });
    fs.writeFileSync('json2/1005.json', json);
}
doit();
