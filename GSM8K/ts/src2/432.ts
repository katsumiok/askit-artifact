import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/432.json')) {
        console.log("Skipping 432")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Prince Thaddeus slew {{x1}} dragons with his mighty sword, while Prince Arthur, using a spear, slew three quarters as many dragons as Prince Thaddeus.  Using a rusty iron axe, Prince Walter slew twice as many dragons as Prince Arthur.  But Prince Bruce, having forgot his sword at home, slew one-fifth as many dragons as Prince Walter using a nail file.  How many Dragons has Prince Bruce slain?', [], [{'input': {'x1': 100}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100});
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
        "id": 432,
        "question": 'Prince Thaddeus slew 100 dragons with his mighty sword, while Prince Arthur, using a spear, slew three quarters as many dragons as Prince Thaddeus.  Using a rusty iron axe, Prince Walter slew twice as many dragons as Prince Arthur.  But Prince Bruce, having forgot his sword at home, slew one-fifth as many dragons as Prince Walter using a nail file.  How many Dragons has Prince Bruce slain?',
        "answer": 30,
        "examples": [{'input': {'x1': 100}, 'output': 30}],
        });
    fs.writeFileSync('json2/432.json', json);
}
doit();
