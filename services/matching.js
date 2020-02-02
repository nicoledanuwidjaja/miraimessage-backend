// Eirean's "Term Frequency-inverse Document Frequency" algorithm for document search and information retrieval
let natural = require('natural');
let TfIdf = natural.TfIdf;

let tokenizer = new natural.WordTokenizer();

function addLetter(set, letter) {
    set.addDocument(tokenizer.tokenize(letter));
}

function getComparisons(set, compString) {
    let dict = [];
    set.tfidfs(compString, function(i, measure) {
        dict.push(measure);
    });
    return dict;
}

function getDocumentComparison(set, document) {
    return getComparisons(set, document);
}

// function getTagComparison(set, tags) {
//     return getComparisons(set, tags);
// }

function match(letter, letters) {
    let set = new TfIdf();
    letters.forEach(l => {
        addLetter(set, l);
    });
    let compResult = getDocumentComparison(set, letter);
    return letters[arrayMaxIndex(compResult)];
}

function arrayMaxIndex(array) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    return index;
}
