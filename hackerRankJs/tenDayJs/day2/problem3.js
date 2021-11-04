function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(let letter of s){
        if (vowels.includes(letter)) {
            console.log(letter);
        } else {
            consonants += letter + '\n';
        }
    }
    console.log(consonants.trim());
}