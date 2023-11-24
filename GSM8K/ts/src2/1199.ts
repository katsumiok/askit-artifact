import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1199.json')) {
        console.log("Skipping 1199")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("Fred was preparing for a party to be held in four days.  So, he made {{x1}} gallons of root beer on the first day and put them in the refrigerator cooler.  But later that evening, his children discovered the delicious nectar and robbed the cooler, drinking {{x2}} of those gallons of root beer.  On the second day, his wife Barbie also discovered the root beer and accidentally spilled {{x3}} gallons. On the third day, Fred's friend Ronnie visited Fred's house and helped himself to the root beer, further reducing the amount remaining by {{x4}} gallons.  On the fourth day, {{x5}} people showed up for the party.  If Fred and the others shared the remaining root beer equally, how much was available for each to drink during the party?", [], [{'input': {'x1': 24, 'x2': 4, 'x3': 7, 'x4': 5, 'x5': 3}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 4, 'x3': 7, 'x4': 5, 'x5': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1199,
        "question": "Fred was preparing for a party to be held in four days.  So, he made 24 gallons of root beer on the first day and put them in the refrigerator cooler.  But later that evening, his children discovered the delicious nectar and robbed the cooler, drinking 4 of those gallons of root beer.  On the second day, his wife Barbie also discovered the root beer and accidentally spilled 7 gallons. On the third day, Fred's friend Ronnie visited Fred's house and helped himself to the root beer, further reducing the amount remaining by 5 gallons.  On the fourth day, 3 people showed up for the party.  If Fred and the others shared the remaining root beer equally, how much was available for each to drink during the party?",
        "answer": 2,
        "examples": [{'input': {'x1': 24, 'x2': 4, 'x3': 7, 'x4': 5, 'x5': 3}, 'output': 2}],
        });
    fs.writeFileSync('json2/1199.json', json);
}
doit();
