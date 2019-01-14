"use strict";

var rp = rp || {};

rp.tabs = class tabs {
    constructor() {
        this.assignTabEventHandlers();
    }

    selectTab(tab) {
        if (typeof tab === 'string') {
            tab = document.getElementById(tab);
        }
        this.resetAllTabsBackgroundColor();
        tab.click();
    }

    resetAllTabsBackgroundColor() {
        const allLabels = document.querySelectorAll("section.tabs-container > label");
        [...allLabels].forEach(label => {
            if (!label.previousElementSibling.disabled) {
                label.style.color = "#262626";
                label.style.background = "#bfbfbf";
                label.style.cursor = "pointer";
            }
        });
    }

    assignTabEventHandlers() {
        const clickHandler = (e, objOwner) => {
            objOwner.resetAllTabsBackgroundColor();

            let label = e.target.nextElementSibling;
            label.style.background = '#fff';
            label.style.cursor = "default";
        }

        let tabs = document.querySelectorAll("section.tabs-container input");
        [...tabs].forEach(tab => {
            tab.addEventListener("click", (event) => clickHandler(event, this));
        });
    }

    disableTab(tab) {
        if (typeof tab === "string") {
            tab = document.getElementById(tab);
        }

        let label = tab.nextElementSibling;

        label.style.color = "gray";
        label.style.background = "#d9d9d9";
        label.style.cursor = "default";

        tab.disabled = true;
    }

    enableTab(tab) {
        if (typeof tab === "string") {
            tab = document.getElementById(tab);
        }

        let label = tab.nextElementSibling;

        label.style.color = "#262626";
        label.style.background = "#bfbfbf";
        label.style.cursor = "pointer";

        tab.disabled = false;
    };
}

let tabManager = new rp.tabs();

let sel = document.getElementById('test-click-1');
sel.addEventListener("click", function (e) {
    tabManager.disableTab(document.getElementById('tab-two'));
});

sel = document.getElementById('test-click-2');
sel.addEventListener("click", function (e) {
    tabManager.enableTab(document.getElementById('tab-two'));
});

sel = document.getElementById("test-click-3");
sel.addEventListener("click", function (e) {
    tabManager.selectTab(document.getElementById("tab-three"));
});

