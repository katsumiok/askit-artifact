import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/319.json')) {
        console.log("Skipping 319")
        return;
    }
    // measure time
    const f = define<number, {}>('The ratio of the electric poles and electric wires needed to connect and supply the electricity in a certain neighborhood is 1:3. If the total number of electric wires needed to connect the electricity in the neighborhood is 45, calculate the total number of electric poles required by an electric company to supply the electricity in the neighborhood.', [], [{'input': {}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 319,
        "question": 'The ratio of the electric poles and electric wires needed to connect and supply the electricity in a certain neighborhood is 1:3. If the total number of electric wires needed to connect the electricity in the neighborhood is 45, calculate the total number of electric poles required by an electric company to supply the electricity in the neighborhood.',
        "answer": 15,
        "examples": [{'input': {}, 'output': 15}],
        });
    fs.writeFileSync('json2/319.json', json);
}
doit();
