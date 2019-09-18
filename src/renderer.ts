import { exec } from "child_process";
import { shell, dialog } from "electron";
import { query } from "./query/query";
import { ISystemInterface } from "./interfaces/interfaces";

const elements = ["wifi", "system_info", "temperature", "uptime", "feedback"];
/**
 * Removes all attributes
 */
async function rmAttributes(): Promise<void> {
    elements.forEach((id) => {
        document
        .querySelector(`${id}`)
        .classList
        .remove("active");
    });
}

/**
 * @param id - id of object we want to add
 */
async function mkAttribute(id: string): Promise<void> {
    document
    .querySelector(`#${id}`)
    .classList
    .add("active");
}

/**
 * Twitter Link Generator
 */
async function twitterLink(): Promise<void> {
    await rmAttributes();
    await mkAttribute("feedback");
    shell.openExternal("https://twitter.com/Carlos92622018");
}

async function systemInformation(){
    await rmAttributes();
    await mkAttribute("system_info");
    const data = await query(`"SELECT * from system_info;"`);
    const links = document.querySelector("#activeForm");
    links.innerHTML = "";
}