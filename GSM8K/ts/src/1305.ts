import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1305.json')) {
        console.log("Skipping 1305")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("The Adams family is busy making cookies. So far, they've made {{x1}} cookies. They have {{x2}} rainbow cookies, {{x3}} oatmeal cookies, and some chocolate chip cookies. How many chocolate chip cookies have they made?", [], [{'input': {'x1': 7995, 'x2': 2595, 'x3': 3075}, 'output': 2325}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7995, 'x2': 2595, 'x3': 3075});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2325;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1305,
        "question": "The Adams family is busy making cookies. So far, they've made 7995 cookies. They have 2595 rainbow cookies, 3075 oatmeal cookies, and some chocolate chip cookies. How many chocolate chip cookies have they made?",
        "answer": 2325,
        "examples": [{'input': {'x1': 7995, 'x2': 2595, 'x3': 3075}, 'output': 2325}],
        });
    fs.writeFileSync('json/1305.json', json);
}
doit();
