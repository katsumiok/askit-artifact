import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1245.json')) {
        console.log("Skipping 1245")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mary is making ice cubes with fruit frozen in them for a cocktail party. She makes some strawberry cubes, and a number of blueberry cubes equal to {{x1}} times the number of strawberry cubes minus 4. If she makes {{x2}} ice cubes total, how many blueberry cubes does she make?', [], [{'input': {'x1': 5, 'x2': 116}, 'output': 96}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 116});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 96;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1245,
        "question": 'Mary is making ice cubes with fruit frozen in them for a cocktail party. She makes some strawberry cubes, and a number of blueberry cubes equal to 5 times the number of strawberry cubes minus 4. If she makes 116 ice cubes total, how many blueberry cubes does she make?',
        "answer": 96,
        "examples": [{'input': {'x1': 5, 'x2': 116}, 'output': 96}],
        });
    fs.writeFileSync('json2/1245.json', json);
}
doit();
