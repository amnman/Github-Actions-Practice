import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

let run=()=> {
    core.info("JavaScript Post-Action Triggered!! Worfklow Complete");
    let user =  core.getInput('user',{required:true});
    core.info(`Bye ${user} !!`);
}

run();