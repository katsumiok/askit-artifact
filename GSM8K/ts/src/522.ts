import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/522.json')) {
        console.log("Skipping 522")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("It's strawberry-picking time on Grandma Concetta's farm.  Tony can pick {{x1}} quarts of strawberries per hour, while Bobby picks one less quart of strawberries per hour than Tony.  Kathy can pick twice as many strawberries per hour as Bobby, and Ricky picks two fewer quarts of strawberries per hour than does Kathy.  In total, how many quarts of strawberries can Tony, Bobby, Ricky, and Kathy pick per hour on Grandma Concetta's farm?", [], [{'input': {'x1': 6}, 'output': 29}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 29;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 522,
        "question": "It's strawberry-picking time on Grandma Concetta's farm.  Tony can pick 6 quarts of strawberries per hour, while Bobby picks one less quart of strawberries per hour than Tony.  Kathy can pick twice as many strawberries per hour as Bobby, and Ricky picks two fewer quarts of strawberries per hour than does Kathy.  In total, how many quarts of strawberries can Tony, Bobby, Ricky, and Kathy pick per hour on Grandma Concetta's farm?",
        "answer": 29,
        "examples": [{'input': {'x1': 6}, 'output': 29}],
        });
    fs.writeFileSync('json/522.json', json);
}
doit();
