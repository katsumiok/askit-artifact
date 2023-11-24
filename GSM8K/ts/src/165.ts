import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/165.json')) {
        console.log("Skipping 165")
        return;
    }
    // measure time
    const f = define<number, {}>('For his 30th birthday, Elvira chose a new computer with many accessories as a gift. She has a budget of €1500 donated by her whole family and thinks that she will be able to keep a little money to afford a garment. She goes to a computer store and chooses a machine that costs €1090 with a screen, keyboard and mouse. She also takes a scanner for €157, a CD burner worth €74 and a printer for €102. How much money will she have left for her clothing?', [], [{'input': {}, 'output': 77}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 77;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 165,
        "question": 'For his 30th birthday, Elvira chose a new computer with many accessories as a gift. She has a budget of €1500 donated by her whole family and thinks that she will be able to keep a little money to afford a garment. She goes to a computer store and chooses a machine that costs €1090 with a screen, keyboard and mouse. She also takes a scanner for €157, a CD burner worth €74 and a printer for €102. How much money will she have left for her clothing?',
        "answer": 77,
        "examples": [{'input': {}, 'output': 77}],
        });
    fs.writeFileSync('json/165.json', json);
}
doit();
