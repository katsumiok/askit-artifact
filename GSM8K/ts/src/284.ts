import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/284.json')) {
        console.log("Skipping 284")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Alani's family decided that the children should write stories of any kind. They were then required to read all of the stories they'd written to the family at the end of the weekend. Alani wrote {{x1}} stories in the first week, her brother Braylen wrote {{x2}} stories, and her sister Margot wrote {{x3}} stories. If they each doubled the number of stories they'd written in the first week in the second week, calculate the total number of stories they wrote altogether.", [], [{'input': {'x1': 20, 'x2': 40, 'x3': 60}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 40, 'x3': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 284,
        "question": "Alani's family decided that the children should write stories of any kind. They were then required to read all of the stories they'd written to the family at the end of the weekend. Alani wrote 20 stories in the first week, her brother Braylen wrote 40 stories, and her sister Margot wrote 60 stories. If they each doubled the number of stories they'd written in the first week in the second week, calculate the total number of stories they wrote altogether.",
        "answer": 360,
        "examples": [{'input': {'x1': 20, 'x2': 40, 'x3': 60}, 'output': 360}],
        });
    fs.writeFileSync('json/284.json', json);
}
doit();
