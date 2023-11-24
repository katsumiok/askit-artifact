import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/901.json')) {
        console.log("Skipping 901")
        return;
    }
    // measure time
    const f = define<number, {}>("Calvin is making soup for his family for dinner. He has a pot with enough soup to fill four adult's bowls or eight child's bowls. He is an adult and will be eating with his adult wife and their two children. If everyone eats one bowl at a meal, how many times will each child be able to have a bowl of soup for lunch from the leftover soup?", [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 901,
        "question": "Calvin is making soup for his family for dinner. He has a pot with enough soup to fill four adult's bowls or eight child's bowls. He is an adult and will be eating with his adult wife and their two children. If everyone eats one bowl at a meal, how many times will each child be able to have a bowl of soup for lunch from the leftover soup?",
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json/901.json', json);
}
doit();
