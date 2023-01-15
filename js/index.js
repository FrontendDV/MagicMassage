const accordionItem1 = document.querySelector("#accordionItem1");
const accordionItem2 = document.querySelector("#accordionItem2");
const accordionItem3 = document.querySelector("#accordionItem3");
const accordionItem4 = document.querySelector("#accordionItem4");


accordionItem1.addEventListener('click', () => {
    const answer = document.querySelector("#answer-1");
    const arrow = document.querySelector("#img-1")
    arrow.classList.toggle("rotate")
    answer.classList.toggle("accordion-answer-item-toggle")
})

accordionItem2.addEventListener('click', () => {
    const answer = document.querySelector("#answer-2");
    const arrow = document.querySelector("#img-2")
    arrow.classList.toggle("rotate")
    answer.classList.toggle("accordion-answer-item-toggle")
})

accordionItem3.addEventListener('click', () => {
    const answer = document.querySelector("#answer-3");
    const arrow = document.querySelector("#img-3")
    arrow.classList.toggle("rotate")
    answer.classList.toggle("accordion-answer-item-toggle")
})

accordionItem4.addEventListener('click', () => {
    const answer = document.querySelector("#answer-4");
    const arrow = document.querySelector("#img-4")
    arrow.classList.toggle("rotate")
    answer.classList.toggle("accordion-answer-item-toggle")
})



// SLIDER

const paggination1 = document.querySelector("#paggination1")
const paggination2 = document.querySelector("#paggination2")
const paggination3 = document.querySelector("#paggination3")



paggination1.addEventListener("click", () => {
    const reviewItemDiv = document.querySelector(".review-item-div")
    paggination2.classList.remove("paggination-circle-active")
    paggination3.classList.remove("paggination-circle-active")
    paggination1.classList.add("paggination-circle-active")
    reviewItemDiv.style.transform = "translateX(0px)"
})


paggination2.addEventListener("click", () => {
    const reviewItemDiv = document.querySelector(".review-item-div")
    paggination1.classList.remove("paggination-circle-active")
    paggination3.classList.remove("paggination-circle-active")
    paggination2.classList.add("paggination-circle-active")
    reviewItemDiv.style.transform = "translateX(-250px)"
})


paggination3.addEventListener("click", () => {
    const reviewItemDiv = document.querySelector(".review-item-div")
    paggination1.classList.remove("paggination-circle-active")
    paggination2.classList.remove("paggination-circle-active")
    paggination3.classList.add("paggination-circle-active")
    reviewItemDiv.style.transform = "translateX(-520px)"
})

