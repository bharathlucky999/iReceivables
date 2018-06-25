mport http from "k6/http";
import { check, group } from "k6";

/*
 * k6 supports all standard HTTP verbs/methods:
 * POST
 */

export default function() {
    // POST request
    group("POST", function() {
        let res = http.post("https://apis-dev.cscglobal.com/everest/iReceivables/v1/userTokenization/query", { verb: "post" });
        check(res, {
            "status is 200": (r) => r.status === 200,
            "is verb correct": (r) => r.json().form.verb === "post",
        });
    });
