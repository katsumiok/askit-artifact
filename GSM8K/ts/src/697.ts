import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/697.json')) {
        console.log("Skipping 697")
        return;
    }
    // measure time
    const f = define<number, {}>("Great Grandma Jones has three children.  And each of her children has three children of their own, who are Great Grandma Jones' grandchildren.  And each of these grandchildren has three babies of their own, who are Great Grandma Jones' great grand-babies.  If all of the family show up at the family reunion, how many great grand-babies will be there for Great Grandma Jones to kiss?", [], [{'input': {}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 697,
        "question": "Great Grandma Jones has three children.  And each of her children has three children of their own, who are Great Grandma Jones' grandchildren.  And each of these grandchildren has three babies of their own, who are Great Grandma Jones' great grand-babies.  If all of the family show up at the family reunion, how many great grand-babies will be there for Great Grandma Jones to kiss?",
        "answer": 27,
        "examples": [{'input': {}, 'output': 27}],
        });
    fs.writeFileSync('json/697.json', json);
}
doit();
