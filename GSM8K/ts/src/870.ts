import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/870.json')) {
        console.log("Skipping 870")
        return;
    }
    // measure time
    const f = define<number, {}>('Madeline and her roommate, Keenan, share the cost of groceries. In total, they spend about $400 per month. In a four-week month, how many dollars does Keenan spend per week if Madeline pays 60% of the cost?', [], [{'input': {}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 870,
        "question": 'Madeline and her roommate, Keenan, share the cost of groceries. In total, they spend about $400 per month. In a four-week month, how many dollars does Keenan spend per week if Madeline pays 60% of the cost?',
        "answer": 40,
        "examples": [{'input': {}, 'output': 40}],
        });
    fs.writeFileSync('json/870.json', json);
}
doit();
