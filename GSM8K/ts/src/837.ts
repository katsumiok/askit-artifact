import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/837.json')) {
        console.log("Skipping 837")
        return;
    }
    // measure time
    const f = define<number, {}>('Erika is saving for a new laptop. The laptop she wants costs $600. The sales assistant told her that if she traded in her old laptop, the price of the new one would be reduced by $200. She thinks this is a good deal and agrees to do it. She already has some savings in her purse, and has also been paid $150 this week for her part-time job. Her mom agrees to give her $80 to help her. If Erika now only needs an extra $50 to buy the laptop, how much money does she have in her purse?', [], [{'input': {}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 837,
        "question": 'Erika is saving for a new laptop. The laptop she wants costs $600. The sales assistant told her that if she traded in her old laptop, the price of the new one would be reduced by $200. She thinks this is a good deal and agrees to do it. She already has some savings in her purse, and has also been paid $150 this week for her part-time job. Her mom agrees to give her $80 to help her. If Erika now only needs an extra $50 to buy the laptop, how much money does she have in her purse?',
        "answer": 120,
        "examples": [{'input': {}, 'output': 120}],
        });
    fs.writeFileSync('json/837.json', json);
}
doit();
