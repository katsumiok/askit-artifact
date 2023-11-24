import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/250.json')) {
        console.log("Skipping 250")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Each class in a school has {{x1}} students. There are {{x2}} classes. The school as a whole is 50% boys and 50% girls. The first class has {{x3}} girls. The second class has {{x4}} girls. How many boys are in the third class?', [], [{'input': {'x1': 20, 'x2': 3, 'x3': 15, 'x4': 12}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 3, 'x3': 15, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 250,
        "question": 'Each class in a school has 20 students. There are 3 classes. The school as a whole is 50% boys and 50% girls. The first class has 15 girls. The second class has 12 girls. How many boys are in the third class?',
        "answer": 17,
        "examples": [{'input': {'x1': 20, 'x2': 3, 'x3': 15, 'x4': 12}, 'output': 17}],
        });
    fs.writeFileSync('json2/250.json', json);
}
doit();
