chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ arr: [] });
});

var ques_array = [];
var is_busy = false;
var badge = 0;
var result = [];
var is_result_busy = false;

function checker(item) {
    //console.log(item);
    getResult(item);
    //if(!item.fl)
    // var id=setInterval(getResult,4000,item);
    while (is_busy) { }
    is_busy = true;
    var i = ques_array.indexOf(item);
    ques_array.splice(i, 1);
    chrome.storage.sync.set({ arr: ques_array });
    is_busy = false;
}

function getResult(ques) {
    fetch(`https://www.codechef.com/api/ide/submit?solution_id=${ques.submission_id}`, {
        "method": "POST",
    }).then(res => res.json).then(hello)
}

chrome.runtime.onStartup.addListener(function () {
    badge = 0;
    chrome.tts.VoiceGender = "female";
    chrome.storage.sync.get(['arr'], function (result) {
        ques_array = result.arr;
        if (ques_array.length != 0) {
            is_busy = true;
            ques_array.forEach(function (item, index) {
                setTimeout(checker, 1000, item);
            })
            is_busy = false;
        }
    })
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //console.log(request.entry)
    while (is_busy) { }
    is_busy = true;
    ques_array.push(request.entry);

    chrome.storage.sync.set({ arr: ques_array });
    is_busy = false;
    setTimeout(checker, 500, request.entry);
})

chrome.commands.onCommand.addListener(function (command) {
    if (command === "clean-all") {
        badge = 0;
        result = [];
        chrome.browserAction.setBadgeText({ text: "" });
    }
})
function hello(r) {
    if (r.result_code != "wait") {
        badge++;
        chrome.browserAction.setBadgeText({ text: String(badge) });
        var s = r.result_code;
        var n = r.time;
        var a = r.score;
        var e = r.signal;
        var c = r.error_link;

        var op = {
            type: "list",
            title: ques.qname,
            message: "",
            items: []
        }

        var res = { time: n, prb: ques.qname };
        var table = "<table class='status-table' cellspacing='0' cellpadding='5' width='60%'><tr><th>Sub-Task</th><th>Task #</th><th>Result<br/>(time)</th></tr>";

        switch (s) {
            case "partial_accepted": res.verdict = "Partially Correct";
                op.items.push({ title: "Verdict: ", message: "Partially Accepted!!" });
                op.items.push({ title: "Score: ", message: String(a) });
                op.items.push({ title: "Time: ", message: String(n) + "s" });
                op.iconUrl = "/images/pcorrect_chef_128.png"; break;

            case "accepted": res.verdict = "Correct";
                op.items.push({ title: "Verdict: ", message: "Accepted!!" });
                op.items.push({ title: "Score: ", message: String(a) });
                op.items.push({ title: "Time: ", message: String(n) + "s" });
                op.iconUrl = "/images/correct_chef_128.png";
                table += "<tr class='correct'><td>1</td><td>0</td><td>AC<br>(" + n + ")</td></tr>";
                table += "<tr><th></th><th></th><th>Total Score = 100.00%<br/></th></tr>"; break;

            case "wrong": res.verdict = "Wrong"
                op.items.push({ title: "Verdict: ", message: "Wrong!!" });
                op.items.push({ title: "Score: ", message: String(a) });
                op.items.push({ title: "Time: ", message: String(n) + "s" });
                op.iconUrl = "/images/wrong_chef_128.png";
                table += "<tr class='wrong'><td>1</td><td>0</td><td>WA<br>(" + n + ")</td></tr>";
                table += "<tr><th></th><th></th><th>Total Score =0.00%<br/></th></tr>"; break;

            case "time": res.verdict = "TLE"
                op.items.push({ title: "Verdict: ", message: "Time Limit Exceeded!!" });
                op.iconUrl = "/images/wrong_chef_128.png";
                table += "<tr class='wrong'><td>1</td><td>0</td><td>TLE<br>(" + n + ")</td></tr>";
                table += "<tr><th></th><th></th><th>Total Score = 0.00%<br/></th></tr>"; break;

            case "runtime": res.verdict = "Runtime Error";
                op.items.push({ title: "Verdict: ", message: "Runtime Error(" + e + ")!!" });
                op.iconUrl = "/images/wrong_chef_128.png";
                table += "<tr class='wrong'><td>1</td><td>0</td><td>RE(" + e + ")<br>(" + n + ")</td></tr>";
                table += "<tr><th></th><th></th><th>Total Score = 0.00%<br/></th></tr>"; break;

            case "compile": res.verdict = "Compilation Error";
                op.items.push({ title: "Verdict: ", message: "Compilation Error!!" });
                op.iconUrl = "/images/wrong_chef_128.png";
                table += "<tr class='wrong'><td>1</td><td>0</td><td>CE<br>(" + n + ")<br><a href='" + c + "' target='_blank'>click here</a></td></tr>";
                table += "<tr><th></th><th></th><th>Total Score = 0.00%<br/></th></tr>"; break;

            case "score": res.verdict = "Insufficient Score";
                op.items.push({ title: "Verdict: ", message: "Insufficient Score!!" });
                op.iconUrl = "/images/wrong_chef_128.png"; break;

            case "error": res.verdict = "Internal Error";
                op.items.push({ title: "Verdict: ", message: "Internal Error!!" });
                op.iconUrl = "/images/wrong_chef_128.png"; break;
        }

        table += "</table>";
        chrome.notifications.create(String(ques.id), op);

        if (r.show_status_table === "yes") {
            fetch("https://www.codechef.com/error_status_table/" + r.upid + "/",
                success: function (r) {
                    if (r == "")
                        res.error_table = table;
                    else
                        res.error_table = r;
                }
            })
        }
        else
            res.error_table = table;

        while (is_result_busy) { }
        is_result_busy = true;
        result.push(res);
        is_result_busy = false;
    }
    else
        setTimeout(getResult, 2000, ques);
}
