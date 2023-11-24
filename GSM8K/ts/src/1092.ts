import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1092.json')) {
        console.log("Skipping 1092")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A Tyrannosaurus rex ate half of a small triceratops it had hunted. When it left, a pack of velociraptors scavenged half of what was left. A group of lazy Allosaurus gulped down the last {{x1}} kilograms of meat. How many kilograms of meat were on the triceratops before the T-Rex ate?', [], [{'input': {'x1': 270}, 'output': 1080}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 270});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1080;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1092,
        "question": 'A Tyrannosaurus rex ate half of a small triceratops it had hunted. When it left, a pack of velociraptors scavenged half of what was left. A group of lazy Allosaurus gulped down the last 270 kilograms of meat. How many kilograms of meat were on the triceratops before the T-Rex ate?',
        "answer": 1080,
        "examples": [{'input': {'x1': 270}, 'output': 1080}],
        });
    fs.writeFileSync('json/1092.json', json);
}
doit();
