let replies = new Map([
    ["IMHO", "In my humble opinion"],
    ["LGTM", "Looks good to me"],
    ["PTAL", "Please take a look"],
    ["SGTM", "Sounds good to me"],
    ["TBD", "To be done"],
    ["TBR", "To be reviewed"],
    ["TL;DR", "Too long; didn't read"],
    ["WDYT", "What do you think"]
]);

let authenticity_token = document.querySelector("#new_saved_reply > input[type=hidden]").value;

for (const [title, body] of replies) {
    fetch("https://github.com/settings/replies", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Microsoft Edge\";v=\"101\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://github.com/settings/replies",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `authenticity_token=${authenticity_token}&title=${title}&saved_reply_id=&body=${body}&path=&line=&start_line=&preview_side=&preview_start_side=&start_commit_oid=&end_commit_oid=&base_commit_oid=&comment_id=`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
}

console.log("Github Saved Replied has been updated")
