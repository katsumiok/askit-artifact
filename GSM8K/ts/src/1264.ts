import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1264.json')) {
        console.log("Skipping 1264")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Garrett is popping popcorn for a snack. As the pan of kernels heats up, the kernels start popping faster. Twenty pop in the first {{x1}} seconds of cooking, then three times that amount in the next {{x2}} seconds. The kernels increase to four times the initial popping rate in the next thirty seconds, but in the final {{x3}} seconds, the popping slows down to half the rate as the past {{x4}} seconds. After Garrett takes the pan off the heat, a quarter of the number of kernels that popped in the final {{x5}} seconds of cooking also pop from the residual heat. How many pieces of popcorn does Garrett have to eat?', [], [{'input': {'x1': 30, 'x2': 30, 'x3': 30, 'x4': 30, 'x5': 30}, 'output': 210}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 30, 'x3': 30, 'x4': 30, 'x5': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 210;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1264,
        "question": 'Garrett is popping popcorn for a snack. As the pan of kernels heats up, the kernels start popping faster. Twenty pop in the first 30 seconds of cooking, then three times that amount in the next 30 seconds. The kernels increase to four times the initial popping rate in the next thirty seconds, but in the final 30 seconds, the popping slows down to half the rate as the past 30 seconds. After Garrett takes the pan off the heat, a quarter of the number of kernels that popped in the final 30 seconds of cooking also pop from the residual heat. How many pieces of popcorn does Garrett have to eat?',
        "answer": 210,
        "examples": [{'input': {'x1': 30, 'x2': 30, 'x3': 30, 'x4': 30, 'x5': 30}, 'output': 210}],
        });
    fs.writeFileSync('json/1264.json', json);
}
doit();
