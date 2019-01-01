function replaceAt(str, index, character) {
    //oello
    return str.substr(0, index) + character + str.substr(index+character.length);
}

function str_rev(str, start, end) {

    while (start < end) {
        let temp = str[start];
        str = replaceAt(str, start, str[end]);
        str = replaceAt(str, end, temp);

        start++;
        end--;
    }
    return str;
}

function reverseSentence(sentence) {
    // "Hello World" -> "dlroW olleH" => "World Hello"
    sentence = str_rev(sentence, 0, sentence.length - 1);
    var end = 0;
    var start = 0;

    while (end <= sentence.length) {
        console.log('start', start, 'end', end);
        if (sentence[end] === " " || end === sentence.length) {
            // substr to extract word to be reversed
            str_rev(sentence.substr(start, end), start, end-1);
            start = end;
        }
        end++;
        // console.log('sentence', sentence.length);
    }

    console.log('sentence', sentence);
}

reverseSentence("Hello World Bag");

