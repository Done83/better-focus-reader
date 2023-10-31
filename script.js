const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');
const inputText = document.getElementById('inputTextField'); // Define inputText here
const outputText = document.getElementById('outputText');

const modifyText = () => {
    const inputTextValue = inputText.value;
    const words = inputTextValue.split(' ');
    let modifiedText = '';

    words.forEach((word) => {
        let modifiedWord = '';
        if (word.length >= 7) {
            modifiedWord = `<b>${word.substring(0, 3)}</b>${word.substring(3)}`;
            console.log(modifiedWord);
        } else {
            modifiedWord = `<b>${word.substring(0, 2)}</b>${word.substring(2)}`;
            console.log(modifiedWord);
        }
        modifiedText += modifiedWord + ' ';
    });

    outputText.innerHTML = modifiedText;
};

convertButton.addEventListener('click', () => {
    modifyText();
});

resetButton.addEventListener('click', () => {
    inputText.value = ''; // Now you can reset the input field
    outputText.innerHTML = '';
});
