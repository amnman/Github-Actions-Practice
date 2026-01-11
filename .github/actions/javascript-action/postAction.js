import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

let run=()=> {
    try{
    core.info("JavaScript Post-Action Triggered!! Worfklow Complete");
    //getInput might not be working in the same manner as in Main workflow hence using getState to fetch the input.
    let user =  core.getState('user');
    core.info(`Bye ${user} !!`);

    let test = core.getInput('user',{required:true});
    core.info(`${user}.........`)
    }catch (error) {
            core.error(`Error in post action: ${error.message}`);
    }
}

run();