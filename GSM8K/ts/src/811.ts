import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/811.json')) {
        console.log("Skipping 811")
        return;
    }
    // measure time
    const f = define<number, {}>('Felix notices that kids in the neighborhood are always getting things stuck in trees. Since he is an expert tree climber, he decided to start charging kids to get their stuff out. He charges based on how high he has to climb. Every branch he has to climb up costs $.25. During the week he made $105. On average, how many branches did he climb per day?', [], [{'input': {}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 811,
        "question": 'Felix notices that kids in the neighborhood are always getting things stuck in trees. Since he is an expert tree climber, he decided to start charging kids to get their stuff out. He charges based on how high he has to climb. Every branch he has to climb up costs $.25. During the week he made $105. On average, how many branches did he climb per day?',
        "answer": 60,
        "examples": [{'input': {}, 'output': 60}],
        });
    fs.writeFileSync('json/811.json', json);
}
doit();
