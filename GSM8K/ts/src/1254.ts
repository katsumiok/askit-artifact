import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1254.json')) {
        console.log("Skipping 1254")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Louise is an artist and needs to apply a coat of varnish to her latest paintings. Usually it takes {{x1}} minutes for the coat of varnish to dry on one painting. However, today she is using a new varnish and it takes {{x2}} minutes for the coat to dry. How much longer will it take for the coat of varnish on {{x3}} paintings with the new varnish to dry as it would with the old varnish?', [], [{'input': {'x1': 7, 'x2': 12, 'x3': 6}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 12, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1254,
        "question": 'Louise is an artist and needs to apply a coat of varnish to her latest paintings. Usually it takes 7 minutes for the coat of varnish to dry on one painting. However, today she is using a new varnish and it takes 12 minutes for the coat to dry. How much longer will it take for the coat of varnish on 6 paintings with the new varnish to dry as it would with the old varnish?',
        "answer": 30,
        "examples": [{'input': {'x1': 7, 'x2': 12, 'x3': 6}, 'output': 30}],
        });
    fs.writeFileSync('json/1254.json', json);
}
doit();
