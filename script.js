const convertButton = document.getElementById('convertButton');
const outputText = document.getElementById('outputText');

const modifyText = () => {
    const inputText = document.getElementById('inputTextField').value;
    const words = inputText.split(' ');
    let modifiedText = '';

    words.forEach((word) => {
        let modifiedWord = '';
        if (word.length >= 7) {
            modifiedWord = `<b>${word.substring(0, 3)}</b>${word.substring(3)}`;
            console.log(modifiedWord)
        } else {
            modifiedWord = `<b>${word.substring(0, 2)}</b>${word.substring(2)}`;
            console.log(modifiedWord)
        }
        modifiedText += modifiedWord + ' ';
    });

    outputText.innerHTML = modifiedText;
};

convertButton.addEventListener('click', () => {
    modifyText();
})





// const inputText = document.getElementById("inputText").value;
// const words = inputText.split(" ");
// let modifiedText = "";

// words.forEach((word) => {
//     let modifiedWord;
//     if (word.length > 7) {
//         modifiedWord = `<b>${word.substring(0, 3)}</b>${word.substring(3)}`;
//     } else {
//         modifiedWord = `<b>${word.substring(0, 2)}</b>${word.substring(2)}`;
//     }
//     modifiedText += modifiedWord + " ";
// });