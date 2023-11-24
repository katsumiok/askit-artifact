import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/156.json')) {
        console.log("Skipping 156")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('The zookeeper feeds all the apes in the zoo. He orders all the bananas from a local farm every {{x1}} months. If the monkeys need {{x2}} bananas, the gorillas need {{x3}} bananas, and the baboons need {{x4}} bananas every month, how many bananas does he need to order to last for {{x5}} months?', [], [{'input': {'x1': 2, 'x2': 200, 'x3': 400, 'x4': 100, 'x5': 2}, 'output': 1400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 200, 'x3': 400, 'x4': 100, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 156,
        "question": 'The zookeeper feeds all the apes in the zoo. He orders all the bananas from a local farm every 2 months. If the monkeys need 200 bananas, the gorillas need 400 bananas, and the baboons need 100 bananas every month, how many bananas does he need to order to last for 2 months?',
        "answer": 1400,
        "examples": [{'input': {'x1': 2, 'x2': 200, 'x3': 400, 'x4': 100, 'x5': 2}, 'output': 1400}],
        });
    fs.writeFileSync('json/156.json', json);
}
doit();
