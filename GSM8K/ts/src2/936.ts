import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/936.json')) {
        console.log("Skipping 936")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number}>('A hotel in the Philippines charges {{x1}} pesos for a 12-hour stay or {{x2}} pesos for a 24-hour stay. After {{x3}} hours, visitors have the option to add {{x4}} pesos for every additional hour. Cameron arrives at {{x5}} pm at the hotel and wants to leave at {{x6}} am the next morning. He decides to go with the option of adding on {{x7}} pesos for every hour after the 12-hour mark instead of paying for {{x8}} hours. How much money would Cameron save?', [], [{'input': {'x1': 1000, 'x2': 1600, 'x3': 12, 'x4': 70, 'x5': 5, 'x6': 10, 'x7': 70, 'x8': 24}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 1600, 'x3': 12, 'x4': 70, 'x5': 5, 'x6': 10, 'x7': 70, 'x8': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 936,
        "question": 'A hotel in the Philippines charges 1000 pesos for a 12-hour stay or 1600 pesos for a 24-hour stay. After 12 hours, visitors have the option to add 70 pesos for every additional hour. Cameron arrives at 5 pm at the hotel and wants to leave at 10 am the next morning. He decides to go with the option of adding on 70 pesos for every hour after the 12-hour mark instead of paying for 24 hours. How much money would Cameron save?',
        "answer": 250,
        "examples": [{'input': {'x1': 1000, 'x2': 1600, 'x3': 12, 'x4': 70, 'x5': 5, 'x6': 10, 'x7': 70, 'x8': 24}, 'output': 250}],
        });
    fs.writeFileSync('json2/936.json', json);
}
doit();
