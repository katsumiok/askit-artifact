import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/601.json')) {
        console.log("Skipping 601")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Steve loves playing video games.  His parents get him a console along with {{x1}} games for his birthday.  He saves up enough money to buy {{x2}} game per month for a year, and then the following year he starts buying {{x3}} games a month.  For the third year he buys {{x4}} games a month as he has a new part-time job that makes him more money.  He also gets {{x5}} games for Christmas every year.  How many games does Steve have after {{x6}} years?', [], [{'input': {'x1': 5, 'x2': 1, 'x3': 2, 'x4': 4, 'x5': 5, 'x6': 3}, 'output': 104}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 1, 'x3': 2, 'x4': 4, 'x5': 5, 'x6': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 104;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 601,
        "question": 'Steve loves playing video games.  His parents get him a console along with 5 games for his birthday.  He saves up enough money to buy 1 game per month for a year, and then the following year he starts buying 2 games a month.  For the third year he buys 4 games a month as he has a new part-time job that makes him more money.  He also gets 5 games for Christmas every year.  How many games does Steve have after 3 years?',
        "answer": 104,
        "examples": [{'input': {'x1': 5, 'x2': 1, 'x3': 2, 'x4': 4, 'x5': 5, 'x6': 3}, 'output': 104}],
        });
    fs.writeFileSync('json2/601.json', json);
}
doit();
