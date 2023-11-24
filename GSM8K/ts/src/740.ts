import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/740.json')) {
        console.log("Skipping 740")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A class of {{x1}} students has various hobbies. {{x2}} like to bake, {{x3}} like to play basketball, and the rest like to either play video games or play music. How many like to play video games if the number that like to play music is twice the number that prefer playing basketball?', [], [{'input': {'x1': 50, 'x2': 10, 'x3': 5}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 10, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 740,
        "question": 'A class of 50 students has various hobbies. 10 like to bake, 5 like to play basketball, and the rest like to either play video games or play music. How many like to play video games if the number that like to play music is twice the number that prefer playing basketball?',
        "answer": 25,
        "examples": [{'input': {'x1': 50, 'x2': 10, 'x3': 5}, 'output': 25}],
        });
    fs.writeFileSync('json/740.json', json);
}
doit();
