import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/275.json')) {
        console.log("Skipping 275")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Sean is practicing for his role in a theater production. He has to memorize his lines for two scenes and the lyrics to one solo song. His solo song has {{x1}} lines in the lyrics. The first scene has twice the number of lines, but only a third of them are his lines. The second scene has six more lines than the song, and four-fifths of them are his. How many lines does Sean have to memorize?', [], [{'input': {'x1': 54}, 'output': 138}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 54});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 138;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 275,
        "question": 'Sean is practicing for his role in a theater production. He has to memorize his lines for two scenes and the lyrics to one solo song. His solo song has 54 lines in the lyrics. The first scene has twice the number of lines, but only a third of them are his lines. The second scene has six more lines than the song, and four-fifths of them are his. How many lines does Sean have to memorize?',
        "answer": 138,
        "examples": [{'input': {'x1': 54}, 'output': 138}],
        });
    fs.writeFileSync('json2/275.json', json);
}
doit();
