// bangla result button
document.querySelector("#banglaButton").addEventListener("click", () => {
    const banglaMark = document.querySelector("#banglaMark").value;

    if (!banglaMark) {
        alert("empty!");
    } else if (banglaMark > 100) {
        alert('0-100');
    } else {
        grade('banglaGrade', banglaMark);
        totalMark();
    }
});

// english result button
document.querySelector("#englishButton").addEventListener("click", () => {
    const englishMark = document.querySelector("#englishMark").value;

    if (!englishMark) {
        alert("empty!");
    } else if (englishMark > 100) {
        alert('0-100');
    } else {
        grade('englishGrade', englishMark);
        totalMark();
    }
});

// ict result button
document.querySelector("#ictButton").addEventListener("click", () => {
    const ictMark = document.querySelector("#ictMark").value;

    if (!ictMark) {
        alert("empty!");
    } else if (ictMark > 100) {
        alert('0-100');
    } else {
        grade('ictGrade', ictMark);
        totalMark();
    }
});

// total result button
document.querySelector("#totalbutton").addEventListener("click", () => {
    const banglaMark = document.querySelector("#banglaMark").value;
    const englishMark = document.querySelector("#englishMark").value;
    const ictMark = document.querySelector("#ictMark").value;
    
    if (!banglaMark || !englishMark || !ictMark) {
        alert('empty!');
    } else if (banglaMark < 33 || englishMark < 33 || ictMark < 33) {
        document.querySelector(`#totalGrade`).innerHTML = "F";
    } else {
        const totalMark = parseInt(banglaMark) + parseInt(englishMark) + parseInt(ictMark);
        const avgMark = totalMark / 3; 
        grade('totalGrade', avgMark);
    }
});

function grade(id, mark) {
    let letter = "";
    
    if (mark >= 80) {
        letter = "A+";
    } else if (mark >= 70) {
        letter = "A";
    } else if (mark >= 60) {
        letter = "A-";
    } else if (mark >= 50) {
        letter = "B";
    } else if (mark >= 40) {
        letter = "C";
    } else if (mark >= 33) {
        letter = "D";
    } else {
        letter = "F";
    }

    document.querySelector(`#${id}`).innerHTML = letter;
}

function totalMark() {
    const banglaMark = parseInt(document.querySelector("#banglaMark").value);
    const englishMark = parseInt(document.querySelector("#englishMark").value);
    const ictMark = parseInt(document.querySelector("#ictMark").value);
    
    document.querySelector("#totalMark").innerHTML = (banglaMark || 0) + (englishMark || 0) + (ictMark || 0);
}