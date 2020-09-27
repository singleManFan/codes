const EventEmitter = require('events');
const oneDayPlanRun = {
    "6:00": function () {
        console.log(`现在是早上 6:00，起床，开始新的一天加油！`);
    },
    "7:00": function () {
        console.log(`现在是早上 7:00, 吃早饭！`)
    }
}

function OneDayPlan() { }

Object.setPrototypeOf(OneDayPlan.prototype, EventEmitter.prototype);

const oneDayPlan = new OneDayPlan();

oneDayPlan.on("6:00", function () {
    oneDayPlanRun["6:00"]()
})

oneDayPlan.on("7:00", function () {
    oneDayPlanRun["7:00"]()
})

async function doMain() {
    oneDayPlan.emit("6:00");

    await sleep(2000);

    oneDayPlan.emit("7:00")
}

doMain();

async function sleep(t) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(1)
        }, t)
    })
}