import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1284.json')) {
        console.log("Skipping 1284")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('An ice cream truck is traveling through a neighborhood. Children from various homes have started chasing the truck and, by the time the truck has reached the end of the first street, there are {{x1}} children it. On the second street, each child is joined by another child and on the third street, each child in the existing group is joined by another {{x2}} children. The original {{x3}} children then give up and leave the group. How many children are now following the truck?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 5}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1284,
        "question": 'An ice cream truck is traveling through a neighborhood. Children from various homes have started chasing the truck and, by the time the truck has reached the end of the first street, there are 5 children it. On the second street, each child is joined by another child and on the third street, each child in the existing group is joined by another 2 children. The original 5 children then give up and leave the group. How many children are now following the truck?',
        "answer": 25,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 5}, 'output': 25}],
        });
    fs.writeFileSync('json2/1284.json', json);
}
doit();
