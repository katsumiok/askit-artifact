import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1026.json')) {
        console.log("Skipping 1026")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('One dwarf can mine {{x1}} pounds of ore per day with his bare hands. He can mine twice as much with an iron pickaxe and 50% more with a steel pickaxe than with an iron pickaxe. How many pounds of ore can {{x2}} dwarves with steel pickaxes mine in a month with {{x3}} days?', [], [{'input': {'x1': 12, 'x2': 40, 'x3': 30}, 'output': 43200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 40, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 43200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1026,
        "question": 'One dwarf can mine 12 pounds of ore per day with his bare hands. He can mine twice as much with an iron pickaxe and 50% more with a steel pickaxe than with an iron pickaxe. How many pounds of ore can 40 dwarves with steel pickaxes mine in a month with 30 days?',
        "answer": 43200,
        "examples": [{'input': {'x1': 12, 'x2': 40, 'x3': 30}, 'output': 43200}],
        });
    fs.writeFileSync('json2/1026.json', json);
}
doit();
