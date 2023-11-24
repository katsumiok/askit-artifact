import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/517.json')) {
        console.log("Skipping 517")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The eighth-grade class held a bake-off. Kelsie made two times more cookies than Josh. Josh made one-fourth the number of cookies that Suzanne made. If Suzanne made {{x1}} cookies, how many did Kelsie make?', [], [{'input': {'x1': 36}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 36});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 517,
        "question": 'The eighth-grade class held a bake-off. Kelsie made two times more cookies than Josh. Josh made one-fourth the number of cookies that Suzanne made. If Suzanne made 36 cookies, how many did Kelsie make?',
        "answer": 18,
        "examples": [{'input': {'x1': 36}, 'output': 18}],
        });
    fs.writeFileSync('json/517.json', json);
}
doit();
