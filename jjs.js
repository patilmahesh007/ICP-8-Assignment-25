
const total_Score = parseInt(prompt(`enter total score`));
if (total_Score >= 90) {
    console.log("Grade: A");
} else if (total_Score >= 80) {
    console.log("Grade: B");
} else if (total_Score >= 70) {
    console.log("Grade: C");
} else if (total_Score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
