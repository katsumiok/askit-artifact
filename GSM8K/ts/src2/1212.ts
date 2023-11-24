import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1212.json')) {
        console.log("Skipping 1212")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Ali is a dean of a private school where he teaches one class. John is also a dean of a public school. John has two classes in his school. Each class has 1/8 the capacity of Ali’s class which has the capacity of {{x1}} students. What is the combined capacity of both schools?', [], [{'input': {'x1': 120}, 'output': 150}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 150;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1212,
        "question": 'Ali is a dean of a private school where he teaches one class. John is also a dean of a public school. John has two classes in his school. Each class has 1/8 the capacity of Ali’s class which has the capacity of 120 students. What is the combined capacity of both schools?',
        "answer": 150,
        "examples": [{'input': {'x1': 120}, 'output': 150}],
        });
    fs.writeFileSync('json2/1212.json', json);
}
doit();
