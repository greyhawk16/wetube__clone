const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const delteBtn = document.querySelectorAll("#deleteCommentBtn");
const videoComments = document.querySelector(".video__comments");
const span2 = document.querySelector(".video__delete");



const addComment = (text, id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "video__comment";

    const icon = document.createElement("i");
    icon.className = "fas fa-comment";

    const span = document.createElement("span");
    span.innerText = ` ${text}`;
        
    const span2 = document.createElement("span");
    span2.innerText = "❌";
    span2.className = "video__delete";


    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(span2);
    videoComments.prepend(newComment);
};



const handleSubmit = async (event) => {
    event.preventDefault();

    const textarea = form.querySelector("textarea");
    const videoId = videoContainer.dataset.id;
    const text = textarea.value;

    if (text === "") {
        return;
    }
    
    const response = await fetch(`/api/videos/${videoId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text}),
    });
    
    if (response.status === 201) {
        textarea.value = "";
        const { newCommentId } = await response.json();
        addComment(text, newCommentId);
    }
};



const handleDelete = async (event) => {
    const { id, videoId } = event.target.dataset;
    const response = await fetch(`/api/comments/${commentId}/delete`, {
        method: "DELETE",
    });

    if (response.status === 201) {
        console.log(e.target.parentElement);
        const comment = e.target.parentElement;
        comment.remove();
    }
};


if (form) {
    form.addEventListener("submit", handleSubmit);
    span2.addEventListener("click", handleDelete);
}

