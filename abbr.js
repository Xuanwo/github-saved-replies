import {create_replies} from "./utils"
import {replies} from "./entries";

// Use `full` as title, and `abbr` as real body.
create_replies(replies.map(([title, body]) => [body, title]));
