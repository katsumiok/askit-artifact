import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/186.json')) {
        console.log("Skipping 186")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Russell works at a pet store and is distributing straw among the rodents. The rats are kept in {{x1}} cages in equal groups and each rat is given {{x2}} pieces of straw. There are {{x3}} cages of hamsters that are kept alone and each hamster is given {{x4}} pieces of straw. There is also a pen of rabbits where {{x5}} pieces of straw are distributed among the rabbits. No straw is used anywhere else in the store. If {{x6}} pieces of straw have been distributed among the small rodents, how many rats are in each cage?', [], [{'input': {'x1': 3, 'x2': 6, 'x3': 10, 'x4': 5, 'x5': 20, 'x6': 160}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 6, 'x3': 10, 'x4': 5, 'x5': 20, 'x6': 160});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 186,
        "question": 'Russell works at a pet store and is distributing straw among the rodents. The rats are kept in 3 cages in equal groups and each rat is given 6 pieces of straw. There are 10 cages of hamsters that are kept alone and each hamster is given 5 pieces of straw. There is also a pen of rabbits where 20 pieces of straw are distributed among the rabbits. No straw is used anywhere else in the store. If 160 pieces of straw have been distributed among the small rodents, how many rats are in each cage?',
        "answer": 5,
        "examples": [{'input': {'x1': 3, 'x2': 6, 'x3': 10, 'x4': 5, 'x5': 20, 'x6': 160}, 'output': 5}],
        });
    fs.writeFileSync('json/186.json', json);
}
doit();
