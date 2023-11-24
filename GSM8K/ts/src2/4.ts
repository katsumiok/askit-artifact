import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/4.json')) {
        console.log("Skipping 4")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Every day, Wendi feeds each of her chickens three cups of mixed chicken feed, containing seeds, mealworms and vegetables to help keep them healthy.  She gives the chickens their feed in three separate meals. In the morning, she gives her flock of chickens {{x1}} cups of feed.  In the afternoon, she gives her chickens another {{x2}} cups of feed.  How many cups of feed does she need to give her chickens in the final meal of the day if the size of Wendi's flock is {{x3}} chickens?", [], [{'input': {'x1': 15, 'x2': 25, 'x3': 20}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 25, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 4,
        "question": "Every day, Wendi feeds each of her chickens three cups of mixed chicken feed, containing seeds, mealworms and vegetables to help keep them healthy.  She gives the chickens their feed in three separate meals. In the morning, she gives her flock of chickens 15 cups of feed.  In the afternoon, she gives her chickens another 25 cups of feed.  How many cups of feed does she need to give her chickens in the final meal of the day if the size of Wendi's flock is 20 chickens?",
        "answer": 20,
        "examples": [{'input': {'x1': 15, 'x2': 25, 'x3': 20}, 'output': 20}],
        });
    fs.writeFileSync('json2/4.json', json);
}
doit();
