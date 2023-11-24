import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/534.json')) {
        console.log("Skipping 534")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Twenty kids went out on a school trip. In one of the several activities they participated in, they were divided into two equal groups of girls and boys and then went out for a scavenger hunt of seashells. The boys went out for the search and brought back {{x1}} shells each. If the girls brought an amount equal to the number of shells brought by the boys plus four times as many seashells as the boys, how many seashells were brought by each girl?', [], [{'input': {'x1': 60}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 534,
        "question": 'Twenty kids went out on a school trip. In one of the several activities they participated in, they were divided into two equal groups of girls and boys and then went out for a scavenger hunt of seashells. The boys went out for the search and brought back 60 shells each. If the girls brought an amount equal to the number of shells brought by the boys plus four times as many seashells as the boys, how many seashells were brought by each girl?',
        "answer": 300,
        "examples": [{'input': {'x1': 60}, 'output': 300}],
        });
    fs.writeFileSync('json2/534.json', json);
}
doit();
