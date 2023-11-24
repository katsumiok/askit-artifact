import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1265.json')) {
        console.log("Skipping 1265")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tim wanted to make lemonade for a pool party.  For a gallon of lemonade, his recipe called for {{x1}} cup of fresh lemon juice.  He found that {{x2}} lemons would yield {{x3}} cup of juice.  He figured he would need to make {{x4}} gallons of lemonade for the party.  His best friend Allen asked if Tim could make an extra gallon for him that was twice as tart as the other gallons.  How many lemons will Tim need?', [], [{'input': {'x1': 1, 'x2': 6, 'x3': 1, 'x4': 4}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 6, 'x3': 1, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1265,
        "question": 'Tim wanted to make lemonade for a pool party.  For a gallon of lemonade, his recipe called for 1 cup of fresh lemon juice.  He found that 6 lemons would yield 1 cup of juice.  He figured he would need to make 4 gallons of lemonade for the party.  His best friend Allen asked if Tim could make an extra gallon for him that was twice as tart as the other gallons.  How many lemons will Tim need?',
        "answer": 36,
        "examples": [{'input': {'x1': 1, 'x2': 6, 'x3': 1, 'x4': 4}, 'output': 36}],
        });
    fs.writeFileSync('json/1265.json', json);
}
doit();
