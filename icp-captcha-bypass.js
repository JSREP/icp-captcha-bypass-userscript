// ==UserScript==
// @name         icp-captcha-bypass
// @namespace    https://github.com/CC11001100/icp-captcha-bypass-UserScript
// @version      0.1
// @description  避免每次都手输入验证码
// @author       CC11001100
// @match        https://m-beian.miit.gov.cn/*
// @grant        none
// ==/UserScript==

(async () => {

    async function sleep(mils) {
        return new Promise((resolve) => setTimeout(resolve, mils));
    }

    Math.floor = function () {
        return 5;
    }

    while (true) {
        const x = document.querySelector("[placeholder=验证码]");
        if (x) {
            x.value = "666666";
            x.dispatchEvent && x.dispatchEvent(new Event("input", { bubbles: true }));
        }
        await sleep(300);
    }

})();