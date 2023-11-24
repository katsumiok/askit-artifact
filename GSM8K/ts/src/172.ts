import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/172.json')) {
        console.log("Skipping 172")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("There are four birds at the Caboose. Sally Two is three years older than Granny Red. Granny Red is two times as old as Sally Four. If Sally Four is the same age as Sally Thirtytwo, and Sally Thirtytwo is {{x1}} years old, what's the total age of the four birds?", [], [{'input': {'x1': 8}, 'output': 51}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 51;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 172,
        "question": "There are four birds at the Caboose. Sally Two is three years older than Granny Red. Granny Red is two times as old as Sally Four. If Sally Four is the same age as Sally Thirtytwo, and Sally Thirtytwo is 8 years old, what's the total age of the four birds?",
        "answer": 51,
        "examples": [{'input': {'x1': 8}, 'output': 51}],
        });
    fs.writeFileSync('json/172.json', json);
}
doit();
