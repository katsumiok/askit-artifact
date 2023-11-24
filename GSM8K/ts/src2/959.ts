import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/959.json')) {
        console.log("Skipping 959")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Coach brought one bag filled with basketballs to practice and dumped them all out onto the gym floor before practice began.  After the practice time was over, he asked Jordan, Jason, and Jeffrey to pick up the balls and carry them over to the bag.  The three boys picked up and carried all of the balls in one trip.  Jordan carried twice as many balls as Jason, and Jason carried twice as many balls as Jeffrey. If Jason had picked up and carried {{x1}} balls, what is the total number of balls that the coach brought to practice?', [], [{'input': {'x1': 2}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 959,
        "question": 'Coach brought one bag filled with basketballs to practice and dumped them all out onto the gym floor before practice began.  After the practice time was over, he asked Jordan, Jason, and Jeffrey to pick up the balls and carry them over to the bag.  The three boys picked up and carried all of the balls in one trip.  Jordan carried twice as many balls as Jason, and Jason carried twice as many balls as Jeffrey. If Jason had picked up and carried 2 balls, what is the total number of balls that the coach brought to practice?',
        "answer": 7,
        "examples": [{'input': {'x1': 2}, 'output': 7}],
        });
    fs.writeFileSync('json2/959.json', json);
}
doit();
