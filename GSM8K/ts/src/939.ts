import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/939.json')) {
        console.log("Skipping 939")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Craig and his brother take turns spelling out the longest letter words they know and counting the number of the letters in those words. After ten rounds, Craig has spelled out {{x1}} words with {{x2}} letters each. If Craig's brother has spelled words with a total count of letters {{x3}} more than Craig, calculate the total number of letters in the words they've spelled after the ten rounds.", [], [{'input': {'x1': 20, 'x2': 15, 'x3': 50}, 'output': 650}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 15, 'x3': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 650;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 939,
        "question": "Craig and his brother take turns spelling out the longest letter words they know and counting the number of the letters in those words. After ten rounds, Craig has spelled out 20 words with 15 letters each. If Craig's brother has spelled words with a total count of letters 50 more than Craig, calculate the total number of letters in the words they've spelled after the ten rounds.",
        "answer": 650,
        "examples": [{'input': {'x1': 20, 'x2': 15, 'x3': 50}, 'output': 650}],
        });
    fs.writeFileSync('json/939.json', json);
}
doit();
