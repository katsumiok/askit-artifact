import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/742.json')) {
        console.log("Skipping 742")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('In a certain school, two classes have a total of {{x1}} students. Each class has the same amount of students, and in each class 40% of the students are girls. How many boys are in each class?', [], [{'input': {'x1': 80}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 742,
        "question": 'In a certain school, two classes have a total of 80 students. Each class has the same amount of students, and in each class 40% of the students are girls. How many boys are in each class?',
        "answer": 24,
        "examples": [{'input': {'x1': 80}, 'output': 24}],
        });
    fs.writeFileSync('json2/742.json', json);
}
doit();
