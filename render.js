import { dayOrders } from "./data.js";

// Function to create a sub-div for each lecture
function createLectureDiv(lecture) {
    // Create the main lecture div
    const $lectureDiv = $("<div></div>").addClass(
        "bg-[#A78295] rounded-xl p-4 shadow-[#331D2C] shadow-md transition-all hover:scale-[1.02] max-md:hover:scale-[1.05] text-center max-md:p-2"
    );

    // Create the subject span
    const $subjectSpan = $("<span></span>")
        .addClass("subject block text-lg max-md:text-[17px]")
        .text(lecture.title);

    // Create the time span
    const $timeSpan = $("<span></span>")
        .addClass("time max-md:text-[15px]")
        .text(lecture.time);

    // Append the spans to the lecture div
    $lectureDiv.append($subjectSpan);
    $lectureDiv.append($timeSpan);

    return $lectureDiv;
}

console.log(dayOrders);

// Iterate over each dayOrder in the dayOrders object
Object.keys(dayOrders).forEach((dayOrderKey, index) => {
    const dayOrder = dayOrders[dayOrderKey];
    const dayOrderDiv = $(`#day-${index + 1}`);

    dayOrder.forEach((lecture) => {
        const $lectureDiv = createLectureDiv(lecture);
        dayOrderDiv.append($lectureDiv);
    });
});
