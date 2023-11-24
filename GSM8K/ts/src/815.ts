import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/815.json')) {
        console.log("Skipping 815")
        return;
    }
    // measure time
    const f = define<number, {}>('Tanya makes a salt scrub from salt, oil, fragrance, citrus zest, and sugar. She makes enough to fill a 10-ounce jar each time. She uses the same amount of citrus zest as fragrance and the same amount of salt as sugar. She uses twice as much oil as salt and twice as much salt as zest. How many ounces of oil does she use?', [], [{'input': {}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 815,
        "question": 'Tanya makes a salt scrub from salt, oil, fragrance, citrus zest, and sugar. She makes enough to fill a 10-ounce jar each time. She uses the same amount of citrus zest as fragrance and the same amount of salt as sugar. She uses twice as much oil as salt and twice as much salt as zest. How many ounces of oil does she use?',
        "answer": 4,
        "examples": [{'input': {}, 'output': 4}],
        });
    fs.writeFileSync('json/815.json', json);
}
doit();
