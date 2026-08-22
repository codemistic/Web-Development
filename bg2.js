const submissions = [];
const listener = (details) => {
    const submission_id = details.url.split("_")[1];
    const token = details.requestHeaders[2].value;
    if (!submissions.includes({})) {
        const obj = { submission_id, token }
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            const idx = submissions.findIndex(submission_id);
            submissions[idx] = { submission_id, ...request.entry };
        })
    }
}
function checkResult(item) {
    fetch(`https://www.codechef.com/api/ide/submit?solution_id=item["submission_id"]`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-csrf-token": item.token
        }
    }).then(res => res.json()).then(data => {
        if (res.result_code != "wait") {

        }
    })
}
chrome.webRequest.onBeforeSendHeaders.addListener(listener, {
    urls: ["https://www.codechef.com/api/ide/submit?solution_id=*"]
}, ["requestHeaders"])
