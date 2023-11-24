import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/994.json')) {
        console.log("Skipping 994")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Tobias, Chikote, and Igneous are the three little wolves who live in the forest and howl at the moon every night. When Tobias howls, each howl lasts for a total of {{x1}} seconds.  Chikote howls for twice as long as Tobias.  And Igneous howls for as long as the other two wolves combined.  What is the combined length of time, in minutes, of the three wolves' howls?", [], [{'input': {'x1': 20}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
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
        "id": 994,
        "question": "Tobias, Chikote, and Igneous are the three little wolves who live in the forest and howl at the moon every night. When Tobias howls, each howl lasts for a total of 20 seconds.  Chikote howls for twice as long as Tobias.  And Igneous howls for as long as the other two wolves combined.  What is the combined length of time, in minutes, of the three wolves' howls?",
        "answer": 2,
        "examples": [{'input': {'x1': 20}, 'output': 2}],
        });
    fs.writeFileSync('json2/994.json', json);
}
doit();
