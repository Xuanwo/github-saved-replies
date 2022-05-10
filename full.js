import {create_replies} from "./utils"

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

create_replies(replies);
