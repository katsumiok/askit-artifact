import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/622.json')) {
        console.log("Skipping 622")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Jim has a {{x1}} pack of gum.  He chews {{x2}} piece of gum for every {{x3}} hours he's at school over a school day that lasts {{x4}} hours.  He chews {{x5}} piece on the way home from school and {{x6}} stick after dinner.  He also gives half the gum he has remaining to his sister when she asks for some right before bed.  How many pieces of gum does Jim have left at the end of the day?", [], [{'input': {'x1': 20, 'x2': 1, 'x3': 2, 'x4': 8, 'x5': 1, 'x6': 1}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 1, 'x3': 2, 'x4': 8, 'x5': 1, 'x6': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 622,
        "question": "Jim has a 20 pack of gum.  He chews 1 piece of gum for every 2 hours he's at school over a school day that lasts 8 hours.  He chews 1 piece on the way home from school and 1 stick after dinner.  He also gives half the gum he has remaining to his sister when she asks for some right before bed.  How many pieces of gum does Jim have left at the end of the day?",
        "answer": 7,
        "examples": [{'input': {'x1': 20, 'x2': 1, 'x3': 2, 'x4': 8, 'x5': 1, 'x6': 1}, 'output': 7}],
        });
    fs.writeFileSync('json/622.json', json);
}
doit();
