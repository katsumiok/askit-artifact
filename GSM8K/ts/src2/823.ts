import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/823.json')) {
        console.log("Skipping 823")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Sasha and Julie are best friends playing on opposing basketball teams. The teams have two practice games scheduled. In the first game, Sasha had the home court advantage and scored {{x1}} points. Julie scored {{x2}} fewer points than Sasha in the same game. Sasha always struggles during away games and their second match was at Julie's home court. Sasha scored {{x3}} fewer points in the second game than Julie's score in the first game. How many total points did Sasha score during both games?", [], [{'input': {'x1': 14, 'x2': 4, 'x3': 6}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 4, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 823,
        "question": "Sasha and Julie are best friends playing on opposing basketball teams. The teams have two practice games scheduled. In the first game, Sasha had the home court advantage and scored 14 points. Julie scored 4 fewer points than Sasha in the same game. Sasha always struggles during away games and their second match was at Julie's home court. Sasha scored 6 fewer points in the second game than Julie's score in the first game. How many total points did Sasha score during both games?",
        "answer": 14,
        "examples": [{'input': {'x1': 14, 'x2': 4, 'x3': 6}, 'output': 14}],
        });
    fs.writeFileSync('json2/823.json', json);
}
doit();
