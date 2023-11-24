import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/504.json')) {
        console.log("Skipping 504")
        return;
    }
    // measure time
    const f = define<number, {}>('Suzie loves to chew fruit-flavored gum. She bought four packs of gum the last time she was at the store. She got two packs of her favorite flavor, strawberry. She paid $2 for a pack of grape gum that she also liked. She wanted to try something new, so she paid half as much for a small pack of green apple gum. If she paid $7 in all, how many dollars did each pack of strawberry gum cost?', [], [{'input': {}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 504,
        "question": 'Suzie loves to chew fruit-flavored gum. She bought four packs of gum the last time she was at the store. She got two packs of her favorite flavor, strawberry. She paid $2 for a pack of grape gum that she also liked. She wanted to try something new, so she paid half as much for a small pack of green apple gum. If she paid $7 in all, how many dollars did each pack of strawberry gum cost?',
        "answer": 2,
        "examples": [{'input': {}, 'output': 2}],
        });
    fs.writeFileSync('json/504.json', json);
}
doit();
