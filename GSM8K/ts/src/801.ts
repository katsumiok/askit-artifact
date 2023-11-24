import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/801.json')) {
        console.log("Skipping 801")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("At Ashley's school, they start a reforestation campaign where each child plants a tree and each teacher plants {{x1}} trees. The school has {{x2}} classes with an average of {{x3}} students and {{x4}} teachers per class. How many trees will they have planted at the end of the campaign?", [], [{'input': {'x1': 2, 'x2': 40, 'x3': 25, 'x4': 3}, 'output': 1240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 40, 'x3': 25, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 801,
        "question": "At Ashley's school, they start a reforestation campaign where each child plants a tree and each teacher plants 2 trees. The school has 40 classes with an average of 25 students and 3 teachers per class. How many trees will they have planted at the end of the campaign?",
        "answer": 1240,
        "examples": [{'input': {'x1': 2, 'x2': 40, 'x3': 25, 'x4': 3}, 'output': 1240}],
        });
    fs.writeFileSync('json/801.json', json);
}
doit();
