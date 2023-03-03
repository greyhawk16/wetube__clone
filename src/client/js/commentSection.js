const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");



const handleSubmit = (event) => {
    event.preventDefault();

    const textarea = form.querySelector("textarea");
    const videoId = videoContainer.dataset.id;
    const text = textarea.value;
    fetch(`/api/videos/${videoId}/comment`, {
        method: "POST",
        body: {
            text,
        },
    });
};


if (form) {
    form.addEventListener("submit", handleSubmit);
}
