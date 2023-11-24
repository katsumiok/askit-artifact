import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/318.json')) {
        console.log("Skipping 318")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If a classroom has {{x1}} times as many girls as they do boys, and 1/10 as many nongendered children as they do boys, and the classroom has {{x2}} boys.  How many total children does it have?', [], [{'input': {'x1': 3, 'x2': 30}, 'output': 123}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 123;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 318,
        "question": 'If a classroom has 3 times as many girls as they do boys, and 1/10 as many nongendered children as they do boys, and the classroom has 30 boys.  How many total children does it have?',
        "answer": 123,
        "examples": [{'input': {'x1': 3, 'x2': 30}, 'output': 123}],
        });
    fs.writeFileSync('json2/318.json', json);
}
doit();
