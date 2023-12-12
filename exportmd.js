// Only show the markdown
document.body.style.visibility = 'hidden';
document.getElementsByClassName('js-snippet-clipboard-copy-unpositioned')[0].style.setProperty('visibility', 'visible', 'important');
document.getElementsByClassName('js-snippet-clipboard-copy-unpositioned')[0].style.setProperty('margin-top', '-350px', 'important');

// Print it!
window.print();

// Make everything look like before
document.body.style.visibility = '';
document.getElementsByClassName('js-snippet-clipboard-copy-unpositioned')[0].style.setProperty('visibility', '');
document.getElementsByClassName('js-snippet-clipboard-copy-unpositioned')[0].style.setProperty('margin-top', '');