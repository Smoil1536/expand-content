const contentWrappers = document.querySelectorAll(".content-wrapper");
contentWrappers.forEach(contentWrapper => {
    const content = contentWrapper.querySelector(".expand-content");
    if (content.classList.contains("expanded")) return

    let isContentFitting = (content.clientHeight === content.scrollHeight);
    contentWrapper.dataset.fit = isContentFitting;
});

function toggleVisibilityOfContent(event) {
    const button = event.target;
    const sibling = button.previousElementSibling;

    sibling.classList.toggle("expanded");
    button.innerHTML === "Read More" ? button.innerHTML = "Read Less" : button.innerHTML = "Read More";
}