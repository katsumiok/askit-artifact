import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1221.json')) {
        console.log("Skipping 1221")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Aiden is making his famous steakhouse-seasoned meatballs for a neighborhood cookout. He adds two tablespoons of his secret steakhouse seasoning for every pound of ground beef he uses. He gets sixteen meatballs from each pound of meat. If he wants to make {{x1}} meatballs for the cookout, how much of his secret seasoning will he need?', [], [{'input': {'x1': 80}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1221,
        "question": 'Aiden is making his famous steakhouse-seasoned meatballs for a neighborhood cookout. He adds two tablespoons of his secret steakhouse seasoning for every pound of ground beef he uses. He gets sixteen meatballs from each pound of meat. If he wants to make 80 meatballs for the cookout, how much of his secret seasoning will he need?',
        "answer": 10,
        "examples": [{'input': {'x1': 80}, 'output': 10}],
        });
    fs.writeFileSync('json/1221.json', json);
}
doit();
