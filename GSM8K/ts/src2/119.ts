import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/119.json')) {
        console.log("Skipping 119")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Adrien's total salary was {{x1}} percent higher than Lylah's. Four years later, his salary had increased, and he was earning 40% more than what he was making four years ago. If Adrien's and Lylah's salary increased simultaneously, and Adrien earned $40000 four years ago, calculate the total salary the two were receiving four years later?", [], [{'input': {'x1': 30}, 'output': 95200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 95200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 119,
        "question": "Adrien's total salary was 30 percent higher than Lylah's. Four years later, his salary had increased, and he was earning 40% more than what he was making four years ago. If Adrien's and Lylah's salary increased simultaneously, and Adrien earned $40000 four years ago, calculate the total salary the two were receiving four years later?",
        "answer": 95200,
        "examples": [{'input': {'x1': 30}, 'output': 95200}],
        });
    fs.writeFileSync('json2/119.json', json);
}
doit();
