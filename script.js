// bangla result button
document.querySelector("#banglaButton").addEventListener("click", () => {
    const banglaMark = parseInt(document.querySelector("#banglaMark").value);
    
    if (!banglaMark) {
        alert("empty!");
    }

    grade('banglaGrade', banglaMark);
});

// english result button
document.querySelector("#englishButton").addEventListener("click", () => {
    const englishMark = parseInt(document.querySelector("#englishMark").value);

    if (!englishMark) {
        alert("empty!");
    }

    grade('englishGrade', englishMark);
});

// ict result button
document.querySelector("#ictButton").addEventListener("click", () => {
    const ictMark = parseInt(document.querySelector("#ictMark").value);

    if (!ictMark) {
        alert("empty!");
    }

    grade('ictGrade', ictMark);
});

function grade(id, mark) {
}