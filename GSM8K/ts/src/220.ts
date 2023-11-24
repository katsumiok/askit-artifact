import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/220.json')) {
        console.log("Skipping 220")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('It takes Carmen {{x1}} minutes to finish a crossword puzzle and {{x2}} minutes to finish a sudoku puzzle.  Over the weekend she solved {{x3}} crossword puzzles and {{x4}} sudoku puzzles.  How much time did she spend playing these games?', [], [{'input': {'x1': 10, 'x2': 5, 'x3': 3, 'x4': 8}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5, 'x3': 3, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 220,
        "question": 'It takes Carmen 10 minutes to finish a crossword puzzle and 5 minutes to finish a sudoku puzzle.  Over the weekend she solved 3 crossword puzzles and 8 sudoku puzzles.  How much time did she spend playing these games?',
        "answer": 70,
        "examples": [{'input': {'x1': 10, 'x2': 5, 'x3': 3, 'x4': 8}, 'output': 70}],
        });
    fs.writeFileSync('json/220.json', json);
}
doit();
