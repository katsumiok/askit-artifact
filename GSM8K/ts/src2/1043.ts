import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1043.json')) {
        console.log("Skipping 1043")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('There are {{x1}} countries in South America and, in each country, there are {{x2}} cities with {{x3}} people living in each city.  If the whole population lives in these cities, how many people are there in South America?', [], [{'input': {'x1': 26, 'x2': 5, 'x3': 1000}, 'output': 130000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 26, 'x2': 5, 'x3': 1000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 130000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1043,
        "question": 'There are 26 countries in South America and, in each country, there are 5 cities with 1000 people living in each city.  If the whole population lives in these cities, how many people are there in South America?',
        "answer": 130000,
        "examples": [{'input': {'x1': 26, 'x2': 5, 'x3': 1000}, 'output': 130000}],
        });
    fs.writeFileSync('json2/1043.json', json);
}
doit();
