let counter = Number(localStorage.getItem("numReviews")) || 0;
counter++;
localStorage.setItem("numReviews", counter);

const numberElement = document.getElementById("number");
numberElement.textContent = `You have submitted ${counter} review${counter === 1 ? "" : "s"}.`;