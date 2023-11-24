import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/698.json')) {
        console.log("Skipping 698")
        return;
    }
    // measure time
    const f = define<number, {}>('Greta’s paycheck is $2400.00. She puts 50% of her pay into her retirement account. She then uses 20% of her paycheck to make her monthly car payment. After funding her retirement and paying for her car, how much money does she have left to spend?', [], [{'input': {}, 'output': 720}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 720;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 698,
        "question": 'Greta’s paycheck is $2400.00. She puts 50% of her pay into her retirement account. She then uses 20% of her paycheck to make her monthly car payment. After funding her retirement and paying for her car, how much money does she have left to spend?',
        "answer": 720,
        "examples": [{'input': {}, 'output': 720}],
        });
    fs.writeFileSync('json/698.json', json);
}
doit();
