import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/74.json')) {
        console.log("Skipping 74")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Artie has a flower stand at the Farmers Market. He sells three kinds of flowers: marigolds, petunias and begonias. He usually sells marigolds for $2.74 per pot, petunias for $1.87 per pot and begonias for $2.12 per pot. Artie has no change today, so he has decided to round all his prices to the nearest dollar. If Artie sells {{x1}} pots of marigolds, {{x2}} pots of petunias and {{x3}} pots of begonias, how much will he make?', [], [{'input': {'x1': 12, 'x2': 9, 'x3': 17}, 'output': 88}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 9, 'x3': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 88;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 74,
        "question": 'Artie has a flower stand at the Farmers Market. He sells three kinds of flowers: marigolds, petunias and begonias. He usually sells marigolds for $2.74 per pot, petunias for $1.87 per pot and begonias for $2.12 per pot. Artie has no change today, so he has decided to round all his prices to the nearest dollar. If Artie sells 12 pots of marigolds, 9 pots of petunias and 17 pots of begonias, how much will he make?',
        "answer": 88,
        "examples": [{'input': {'x1': 12, 'x2': 9, 'x3': 17}, 'output': 88}],
        });
    fs.writeFileSync('json2/74.json', json);
}
doit();
