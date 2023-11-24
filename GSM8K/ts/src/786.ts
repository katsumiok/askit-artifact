import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/786.json')) {
        console.log("Skipping 786")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Ricardo grows tomatoes and eggplants in his garden. Each tomato plant yields {{x1}} tomatoes while each plant of eggplant yields {{x2}} eggplants. He planted {{x3}} tomato plants and {{x4}} plants of eggplant. How many fruits can Ricardo get from his plants?', [], [{'input': {'x1': 22, 'x2': 4, 'x3': 5, 'x4': 8}, 'output': 142}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 22, 'x2': 4, 'x3': 5, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 142;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 786,
        "question": 'Ricardo grows tomatoes and eggplants in his garden. Each tomato plant yields 22 tomatoes while each plant of eggplant yields 4 eggplants. He planted 5 tomato plants and 8 plants of eggplant. How many fruits can Ricardo get from his plants?',
        "answer": 142,
        "examples": [{'input': {'x1': 22, 'x2': 4, 'x3': 5, 'x4': 8}, 'output': 142}],
        });
    fs.writeFileSync('json/786.json', json);
}
doit();
