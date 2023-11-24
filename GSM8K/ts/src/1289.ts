import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1289.json')) {
        console.log("Skipping 1289")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Octavia wants to make a quilt for her sister. She is going to build it from small, medium, and large t-shirts that her family is done with. A small t-shirt is {{x1}} square feet of fabric. A medium one is {{x2}} square feet. A large one is {{x3}} square feet. If she uses {{x4}} small shirts, {{x5}} medium, and {{x6}} large shirts, how many square feet is the quilt?', [], [{'input': {'x1': 3, 'x2': 4, 'x3': 6, 'x4': 11, 'x5': 8, 'x6': 6}, 'output': 101}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4, 'x3': 6, 'x4': 11, 'x5': 8, 'x6': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 101;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1289,
        "question": 'Octavia wants to make a quilt for her sister. She is going to build it from small, medium, and large t-shirts that her family is done with. A small t-shirt is 3 square feet of fabric. A medium one is 4 square feet. A large one is 6 square feet. If she uses 11 small shirts, 8 medium, and 6 large shirts, how many square feet is the quilt?',
        "answer": 101,
        "examples": [{'input': {'x1': 3, 'x2': 4, 'x3': 6, 'x4': 11, 'x5': 8, 'x6': 6}, 'output': 101}],
        });
    fs.writeFileSync('json/1289.json', json);
}
doit();
