import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/569.json')) {
        console.log("Skipping 569")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Liam and Mitchell own competing lemonade stands across the street from one another. When Liam bragged that he had made $63 one weekend, Mitchell laughed and told Liam he had sold {{x1}} lemonades at $4 apiece the same weekend. How many more dollars did Mitchell make selling lemonade that weekend than Liam?', [], [{'input': {'x1': 21}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 21});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 569,
        "question": 'Liam and Mitchell own competing lemonade stands across the street from one another. When Liam bragged that he had made $63 one weekend, Mitchell laughed and told Liam he had sold 21 lemonades at $4 apiece the same weekend. How many more dollars did Mitchell make selling lemonade that weekend than Liam?',
        "answer": 21,
        "examples": [{'input': {'x1': 21}, 'output': 21}],
        });
    fs.writeFileSync('json2/569.json', json);
}
doit();
