import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

let run=()=> {
    core.info("JavaScript Action Triggered!!");
    let user = core.getInput('user',{required:true})
    core.info(`User: ${user}`);
    core.setOutput('response','Hello Maneesh!!');
}

run();