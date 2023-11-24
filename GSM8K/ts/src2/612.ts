import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/612.json')) {
        console.log("Skipping 612")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The basketball team went to the steakhouse to eat dinner.  The first player ate a 6-ounce steak.  The second player ate beef tips, containing {{x1}} beef tips, each an ounce in size.  The third player ate a one-pound steak.  And the fourth and fifth players ordered vegetarian meals.  In total, how many ounces of meat were consumed by the team?', [], [{'input': {'x1': 8}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 612,
        "question": 'The basketball team went to the steakhouse to eat dinner.  The first player ate a 6-ounce steak.  The second player ate beef tips, containing 8 beef tips, each an ounce in size.  The third player ate a one-pound steak.  And the fourth and fifth players ordered vegetarian meals.  In total, how many ounces of meat were consumed by the team?',
        "answer": 30,
        "examples": [{'input': {'x1': 8}, 'output': 30}],
        });
    fs.writeFileSync('json2/612.json', json);
}
doit();
