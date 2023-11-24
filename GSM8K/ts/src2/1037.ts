import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1037.json')) {
        console.log("Skipping 1037")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The price of Parmesan cheese is $11 per pound. Mozzarella cheese is $6 per pound.  Amor buys {{x1}} pounds of Parmesan and {{x2}} pounds of mozzarella cheese.  Is she starts with $50 cash, how much money, in dollars, will she have left to buy meat?', [], [{'input': {'x1': 2, 'x2': 3}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1037,
        "question": 'The price of Parmesan cheese is $11 per pound. Mozzarella cheese is $6 per pound.  Amor buys 2 pounds of Parmesan and 3 pounds of mozzarella cheese.  Is she starts with $50 cash, how much money, in dollars, will she have left to buy meat?',
        "answer": 10,
        "examples": [{'input': {'x1': 2, 'x2': 3}, 'output': 10}],
        });
    fs.writeFileSync('json2/1037.json', json);
}
doit();
