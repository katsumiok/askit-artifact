import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1225.json')) {
        console.log("Skipping 1225")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Carly is making cupcakes and brownies for her art class. She makes {{x1}} less than three times as many brownies as cupcakes. If Carly's class has five people and each person gets two treats, how many cupcakes did Carly make?", [], [{'input': {'x1': 2}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 1225,
        "question": "Carly is making cupcakes and brownies for her art class. She makes 2 less than three times as many brownies as cupcakes. If Carly's class has five people and each person gets two treats, how many cupcakes did Carly make?",
        "answer": 3,
        "examples": [{'input': {'x1': 2}, 'output': 3}],
        });
    fs.writeFileSync('json/1225.json', json);
}
doit();
