const children = document.querySelectorAll('.tabs-container > *');

const tabOne = document.getElementById('tab-one');

const firstSibling = tabOne.nextElementSibling;
alert(firstSibling.nodeType.toString());