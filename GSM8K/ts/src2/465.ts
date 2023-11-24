import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/465.json')) {
        console.log("Skipping 465")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Miss Maria is a middle school teacher, and she loves to collect sports cards. She has six decks with {{x1}} basketball cards in each deck and five boxes with {{x2}} baseball cards in each box. She keeps {{x3}} cards and gives the remaining cards to her students. If her students got ten cards each, how many students does Miss Maria have?', [], [{'input': {'x1': 25, 'x2': 40, 'x3': 50}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 40, 'x3': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 465,
        "question": 'Miss Maria is a middle school teacher, and she loves to collect sports cards. She has six decks with 25 basketball cards in each deck and five boxes with 40 baseball cards in each box. She keeps 50 cards and gives the remaining cards to her students. If her students got ten cards each, how many students does Miss Maria have?',
        "answer": 30,
        "examples": [{'input': {'x1': 25, 'x2': 40, 'x3': 50}, 'output': 30}],
        });
    fs.writeFileSync('json2/465.json', json);
}
doit();
