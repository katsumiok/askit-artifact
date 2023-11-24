import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/587.json')) {
        console.log("Skipping 587")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('At the Burger Palace restaurant, there is an enormous jar containing red, blue and green jelly beans.  On the outside of the jar is a note that reads, "This jar contains 1% fewer red jelly beans than blue jelly beans and 1% more green jelly beans than blue jelly beans."  If the jar contains a total of {{x1}} jelly beans, how many more green jelly beans does it contain than red jelly beans?', [], [{'input': {'x1': 4500}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4500});
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
        "id": 587,
        "question": 'At the Burger Palace restaurant, there is an enormous jar containing red, blue and green jelly beans.  On the outside of the jar is a note that reads, "This jar contains 1% fewer red jelly beans than blue jelly beans and 1% more green jelly beans than blue jelly beans."  If the jar contains a total of 4500 jelly beans, how many more green jelly beans does it contain than red jelly beans?',
        "answer": 30,
        "examples": [{'input': {'x1': 4500}, 'output': 30}],
        });
    fs.writeFileSync('json/587.json', json);
}
doit();
