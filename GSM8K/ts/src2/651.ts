import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/651.json')) {
        console.log("Skipping 651")
        return;
    }
    // measure time
    const f = define<number, {}>('Ariadne has a shop selling hats of two different colors, red and green. Her sales from red hats were $400 in a particular month, half the total amount she earned from selling green hats. Calculate the total amount she made in two months if in the second month her sales were 3/4 of the total sales of the first month.', [], [{'input': {}, 'output': 2100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 651,
        "question": 'Ariadne has a shop selling hats of two different colors, red and green. Her sales from red hats were $400 in a particular month, half the total amount she earned from selling green hats. Calculate the total amount she made in two months if in the second month her sales were 3/4 of the total sales of the first month.',
        "answer": 2100,
        "examples": [{'input': {}, 'output': 2100}],
        });
    fs.writeFileSync('json2/651.json', json);
}
doit();
