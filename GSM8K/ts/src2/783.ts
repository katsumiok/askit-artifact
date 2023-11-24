import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/783.json')) {
        console.log("Skipping 783")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Bob had {{x1}} fish in his ornamental fish pond. {{x2}} were orange, and {{x3}} were white. He decided he wanted to get some more, so he went to the pet store. He had a sales assistant at the pet shop dip out {{x4}} fish out of a mixed tank of both white and orange fish. When he got them home and added them to his pond, he found that he now had twice as many orange fish as white fish. How many white fish did Bob buy at the store?', [], [{'input': {'x1': 7, 'x2': 3, 'x3': 4, 'x4': 17}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 3, 'x3': 4, 'x4': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 783,
        "question": 'Bob had 7 fish in his ornamental fish pond. 3 were orange, and 4 were white. He decided he wanted to get some more, so he went to the pet store. He had a sales assistant at the pet shop dip out 17 fish out of a mixed tank of both white and orange fish. When he got them home and added them to his pond, he found that he now had twice as many orange fish as white fish. How many white fish did Bob buy at the store?',
        "answer": 4,
        "examples": [{'input': {'x1': 7, 'x2': 3, 'x3': 4, 'x4': 17}, 'output': 4}],
        });
    fs.writeFileSync('json2/783.json', json);
}
doit();
