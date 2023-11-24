import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/966.json')) {
        console.log("Skipping 966")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Greta wanted brownies for her birthday.  She made a batch for herself; one dozen cream cheese swirl brownies.  At her office, they threw her a party and sent her home with 1/2 a dozen brownies.  When she arrived home, her friends were there to throw her a surprise party and had {{x1}} dozen brownies waiting.  During the party, {{x2}} 1/2 dozen brownies were eaten.  How many individual brownies did Greta have left over from the entire day?', [], [{'input': {'x1': 4, 'x2': 1}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 966,
        "question": 'Greta wanted brownies for her birthday.  She made a batch for herself; one dozen cream cheese swirl brownies.  At her office, they threw her a party and sent her home with 1/2 a dozen brownies.  When she arrived home, her friends were there to throw her a surprise party and had 4 dozen brownies waiting.  During the party, 1 1/2 dozen brownies were eaten.  How many individual brownies did Greta have left over from the entire day?',
        "answer": 48,
        "examples": [{'input': {'x1': 4, 'x2': 1}, 'output': 48}],
        });
    fs.writeFileSync('json2/966.json', json);
}
doit();
