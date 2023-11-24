import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/383.json')) {
        console.log("Skipping 383")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Millie decides to open a lemonade stand. She spends $18 to buy enough supplies to make {{x1}} pitchers of lemonade. Each pitcher holds {{x2}} cups of lemonade. She sells each cup of lemonade for $1. She sells an average of {{x3}} cups per hour that her lemonade stand is open. If Millie sells all of the lemonade, how much profit will she make per hour that she spends running the lemonade stand?', [], [{'input': {'x1': 3, 'x2': 12, 'x3': 4}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 12, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 383,
        "question": 'Millie decides to open a lemonade stand. She spends $18 to buy enough supplies to make 3 pitchers of lemonade. Each pitcher holds 12 cups of lemonade. She sells each cup of lemonade for $1. She sells an average of 4 cups per hour that her lemonade stand is open. If Millie sells all of the lemonade, how much profit will she make per hour that she spends running the lemonade stand?',
        "answer": 2,
        "examples": [{'input': {'x1': 3, 'x2': 12, 'x3': 4}, 'output': 2}],
        });
    fs.writeFileSync('json2/383.json', json);
}
doit();
