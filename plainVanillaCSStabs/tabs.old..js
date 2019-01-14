"use strict";


const selectTab = function(tab) {
    if (typeof tab === 'string') {
        tab = document.getElementById(tab);
    }
    resetAllTabsBackgroundColor();
    tab.click();
}

function resetAllTabsBackgroundColor() {
    const allLabels = document.querySelectorAll(".tabs-container > label");
    [...allLabels].forEach(label => {
        if (!label.previousElementSibling.disabled) {
            label.style.color = "#262626";
            label.style.background = "#bfbfbf";
            label.style.cursor = "pointer";
        }
    });
}

// Assign 'click' event handler to each "tab" (radio button).

(function assignTabEventHandlers()
{
    let tabs = document.querySelectorAll(".tab");

    [...tabs].forEach(tab => {
        // tab.addEventListener("click", function (e) {
        tab.addEventListener("click", (event) => handler(event, 'x'));

        //     resetAllTabsBackgroundColor();

        //     let label = this.nextElementSibling;
        //     label.style.background = '#fff';
        // });
    });

    const handler = function (e, obj) {
        resetAllTabsBackgroundColor();

        let label = e.target.nextElementSibling;
        label.style.background = '#fff';
    }
}());

const disableTab = function (tab) {
    if (typeof tab === "string") {
      tab = document.getElementById(tab);
    }

    let label = tab.nextElementSibling;

    label.style.color = "gray";
    label.style.background = "#d9d9d9";
    label.style.cursor = "default";

    tab.disabled = true;
}

const enableTab = function(tab) {
    if (typeof tab === "string") {
        tab = document.getElementById(tab);
    }

    let label = tab.nextElementSibling;

    label.style.color = "#262626";
    label.style.background = "#bfbfbf";
    label.style.cursor = "pointer";

    tab.disabled = false;
};





let sel = document.getElementById('test-click-1');
sel.addEventListener("click", function (e) {
    disableTab(document.getElementById('tab-two'));
});

sel = document.getElementById('test-click-2');
sel.addEventListener("click", function (e) {
    enableTab(document.getElementById('tab-two'));
});

sel = document.getElementById("test-click-3");
sel.addEventListener("click", function (e) {
    selectTab(document.getElementById("tab-three"));


    // selectTab('tab-three');
});


