import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/575.json')) {
        console.log("Skipping 575")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('At the end of the school year, Kate asked her teacher if she could have the {{x1}} boxes of {{x2}} crayons since they were all worn down to small pieces.  The teacher agreed.  Kate took the crayons home and decided to make crayon muffins by melting {{x3}} small pieces of crayons together in a muffin tin that she placed in an oven for a few minutes. If she can sell her muffin crayons for $1.50 each, how much money can Kate make?', [], [{'input': {'x1': 3, 'x2': 64, 'x3': 8}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 64, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 575,
        "question": 'At the end of the school year, Kate asked her teacher if she could have the 3 boxes of 64 crayons since they were all worn down to small pieces.  The teacher agreed.  Kate took the crayons home and decided to make crayon muffins by melting 8 small pieces of crayons together in a muffin tin that she placed in an oven for a few minutes. If she can sell her muffin crayons for $1.50 each, how much money can Kate make?',
        "answer": 36,
        "examples": [{'input': {'x1': 3, 'x2': 64, 'x3': 8}, 'output': 36}],
        });
    fs.writeFileSync('json2/575.json', json);
}
doit();
