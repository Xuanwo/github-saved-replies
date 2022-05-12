import {create_replies} from "./utils"
import {replies} from "./entries";

// Use `full` as title, and `abbr` as real body.
let abbrReplies = new Map();
for (const [key, value] of replies) {
    abbrReplies[value] = key;
}

create_replies(abbrReplies);
