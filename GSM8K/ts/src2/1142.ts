import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1142.json')) {
        console.log("Skipping 1142")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jess is trying to guess the number of blue jellybeans in a jar. She can see that there are {{x1}} green jelly beans and twice as many red jelly beans. The rest of the jellybeans are blue jelly beans. If there are a total of {{x2}} jelly beans in total, how many blue jellybeans are there?', [], [{'input': {'x1': 17, 'x2': 60}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 17, 'x2': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1142,
        "question": 'Jess is trying to guess the number of blue jellybeans in a jar. She can see that there are 17 green jelly beans and twice as many red jelly beans. The rest of the jellybeans are blue jelly beans. If there are a total of 60 jelly beans in total, how many blue jellybeans are there?',
        "answer": 9,
        "examples": [{'input': {'x1': 17, 'x2': 60}, 'output': 9}],
        });
    fs.writeFileSync('json2/1142.json', json);
}
doit();
