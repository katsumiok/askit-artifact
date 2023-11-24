import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/777.json')) {
        console.log("Skipping 777")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mike decides he wants to replace his movie collection with digital versions.  He has {{x1}} movies.  A third of the movies are in various series and he knows he can get those for only $6 of the cost of a normal movie by just buying the series together.  40% of the remaining movies are older movies which are $5.  How much does replacing the movies cost if a normal movie costs $10?', [], [{'input': {'x1': 600}, 'output': 4400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 600});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 777,
        "question": 'Mike decides he wants to replace his movie collection with digital versions.  He has 600 movies.  A third of the movies are in various series and he knows he can get those for only $6 of the cost of a normal movie by just buying the series together.  40% of the remaining movies are older movies which are $5.  How much does replacing the movies cost if a normal movie costs $10?',
        "answer": 4400,
        "examples": [{'input': {'x1': 600}, 'output': 4400}],
        });
    fs.writeFileSync('json2/777.json', json);
}
doit();
