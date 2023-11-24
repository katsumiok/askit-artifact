import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/737.json')) {
        console.log("Skipping 737")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Peter wants to make different sized ice cubes with {{x1}} ounces of water. He can make giant cubes that use {{x2}} ounces per cube, medium cubes that use {{x3}} ounces, and small cubes that use 1/2 an ounce. If he makes {{x4}} giant cubes, {{x5}} medium cubes, and {{x6}} small cubes, how many ounces of water does he have left?', [], [{'input': {'x1': 32, 'x2': 4, 'x3': 2, 'x4': 3, 'x5': 7, 'x6': 8}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 4, 'x3': 2, 'x4': 3, 'x5': 7, 'x6': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 737,
        "question": 'Peter wants to make different sized ice cubes with 32 ounces of water. He can make giant cubes that use 4 ounces per cube, medium cubes that use 2 ounces, and small cubes that use 1/2 an ounce. If he makes 3 giant cubes, 7 medium cubes, and 8 small cubes, how many ounces of water does he have left?',
        "answer": 2,
        "examples": [{'input': {'x1': 32, 'x2': 4, 'x3': 2, 'x4': 3, 'x5': 7, 'x6': 8}, 'output': 2}],
        });
    fs.writeFileSync('json/737.json', json);
}
doit();
