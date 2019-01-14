// "use strict";

const TabsManager = {
    create: function() {
        const newObject = Object.create(this);
        newObject.assignTabEventHandlers();
        return newObject;
    },

    radioClickedOrFocused: function(e) {
        console.log(e.id);
    },

    assignTabEventHandlers: function() {
        const localClickHandler = (e, that) => {
            that.radioClickedOrFocused(e.target);
        }

        let radios = document.querySelectorAll("a");
        for (const radio of radios) {
            radio.addEventListener("click",  (event) => {
                localClickHandler(event, this);
            });
        }
    }
};

const o = TabsManager.create();






// ---------------------------------------------------------------------

//  Method call does work.

// "use strict";

// let TabsManager = class {
//     constructor() {
//         this.assignTabEventHandlers();
//     }

//     radioClickedOrFocused(element) {
//         console.log(`element ${element.target.id} clicked`);
//     }

//     assignTabEventHandlers() {
//         const localClickHandler = (e, that) => {
//             that.radioClickedOrFocused(e);
//         }

//         let radios = document.querySelectorAll("a");
//         for (const radio of radios) {
//             radio.addEventListener("click",  (event) => {
//                 event.preventDefault();
//                 event.stopPropagation();
//                 localClickHandler(event, this);
//             });
//         }
//     }
// }

// let o = new TabsManager();


// "use strict";

// var rp = rp || {};

// rp.tabs = class tabs {
//     constructor() {
//         this.assignTabEventHandlers();
//     }

//     handleClick(element) {
//         console.log(`element ${element.target.id} clicked`);
//     }

//     assignTabEventHandlers() {

//         let anchors = document.querySelectorAll("a");
//         [...anchors].forEach(anchor => {
//             anchor.addEventListener("click", function (e) {
//                 this.handleClick(e);
//                 //console.log(this);
//             });
//         });
//     }
// }

// let o = new rp.tabs();

// ---------------------------------------------------------------------


    // "use strict";

    // let TabsManager = class {
    //     constructor() {
    //         this.assignTabEventHandlers();
    //     }

    //     radioClickedOrFocused(element) {
    //         console.log(`element ${element.target.id} clicked`);
    //     }

    //     assignTabEventHandlers() {
    //         let radios = document.querySelectorAll("a");

    //         for (const radio of radios) {
    //             radio.addEventListener("click", function (e) {
    //                 e.preventDefault();
    //                 e.stopPropagation();
    //                 self.radioClickedOrFocused(e);
    //             });
    //         };
    //     }
    // }

    // let o = new TabsManager();


// // Very simple handler:

    // "use strict";

    // let TabsManager = class {
    //     constructor() {
    //         this.assignTabEventHandlers();
    //     }

    //     assignTabEventHandlers() {
    //         let anchors = document.querySelectorAll("a");

    //         for (const anchor of anchors) {
    //             anchor.addEventListener("click", function (e) {
    //                 e.preventDefault();
    //                 e.stopPropagation();
    //                 console.log(`element ${this.id} clicked`);
    //             });
    //         };
    //     }
    // }

    // let o = new TabsManager();