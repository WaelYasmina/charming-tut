const charming = require('charming');
const element = document.querySelector('h1');

charming(element, {
    split: function(delimiter) {
        return delimiter.split(/\s/g);
    }
});