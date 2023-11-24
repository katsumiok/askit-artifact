import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/935.json')) {
        console.log("Skipping 935")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Fern is trying to decide between buying the Widgeteer 3000, which makes {{x1}} widgets an hour, and the WidgetMaster 9000, which makes {{x2}} widgets an hour. Each widget sells for $6. How much more money will Fern make from the Widgeteer {{x3}} vs. the WidgetMaster {{x4}} if it runs {{x5}} hours a day for a month with {{x6}} days?', [], [{'input': {'x1': 60, 'x2': 45, 'x3': 3000, 'x4': 9000, 'x5': 24, 'x6': 30}, 'output': 64800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 45, 'x3': 3000, 'x4': 9000, 'x5': 24, 'x6': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 935,
        "question": 'Fern is trying to decide between buying the Widgeteer 3000, which makes 60 widgets an hour, and the WidgetMaster 9000, which makes 45 widgets an hour. Each widget sells for $6. How much more money will Fern make from the Widgeteer 3000 vs. the WidgetMaster 9000 if it runs 24 hours a day for a month with 30 days?',
        "answer": 64800,
        "examples": [{'input': {'x1': 60, 'x2': 45, 'x3': 3000, 'x4': 9000, 'x5': 24, 'x6': 30}, 'output': 64800}],
        });
    fs.writeFileSync('json2/935.json', json);
}
doit();
