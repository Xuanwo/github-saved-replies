import {create_replies} from "./utils"

let replies = new Map([
    ["In my humble opinion", "IMHO"],
    ["Looks good to me", "LGTM"],
    ["Please take a look", "PTAL"],
    ["Sounds good to me", "SGTM"],
    ["To be done", "TBD"],
    ["To be reviewed", "TBR"],
    ["Too long; didn't read", "TL;DR"],
    ["What do you think", "WDYT"]
]);

create_replies(replies);
