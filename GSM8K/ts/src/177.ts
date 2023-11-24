import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/177.json')) {
        console.log("Skipping 177")
        return;
    }
    // measure time
    const f = define<number, {}>('Zaid spends 1/4 of his salary on rent, 1/3 on car fuel and donates half of the remaining amount to his favorite charity. He gives his daughter 200$ to use for her weekly expenses and 700$ to his wife to budget for groceries and other household goods. If Zaid earns 6000$ per month, how much money will he still have after all these expenses and donations?', [], [{'input': {}, 'output': 350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 177,
        "question": 'Zaid spends 1/4 of his salary on rent, 1/3 on car fuel and donates half of the remaining amount to his favorite charity. He gives his daughter 200$ to use for her weekly expenses and 700$ to his wife to budget for groceries and other household goods. If Zaid earns 6000$ per month, how much money will he still have after all these expenses and donations?',
        "answer": 350,
        "examples": [{'input': {}, 'output': 350}],
        });
    fs.writeFileSync('json/177.json', json);
}
doit();
