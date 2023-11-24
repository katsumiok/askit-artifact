import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/283.json')) {
        console.log("Skipping 283")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Katerina makes designer jewelry.  Her specialty is topaz necklaces.  She uses {{x1}} topaz gemstones per necklace, and fills the space between gemstones using sterling silver beads.  If each topaz gemstone is one inch long, each sterling silver bead is one-quarter of an inch long, and each necklace is made to a total length of {{x2}} inches, how many sterling silver beads does Katerina use per necklace?', [], [{'input': {'x1': 8, 'x2': 25}, 'output': 68}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 68;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 283,
        "question": 'Katerina makes designer jewelry.  Her specialty is topaz necklaces.  She uses 8 topaz gemstones per necklace, and fills the space between gemstones using sterling silver beads.  If each topaz gemstone is one inch long, each sterling silver bead is one-quarter of an inch long, and each necklace is made to a total length of 25 inches, how many sterling silver beads does Katerina use per necklace?',
        "answer": 68,
        "examples": [{'input': {'x1': 8, 'x2': 25}, 'output': 68}],
        });
    fs.writeFileSync('json/283.json', json);
}
doit();
