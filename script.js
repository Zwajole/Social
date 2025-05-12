document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("post-form");
    const postInput = document.getElementById("post-input");
    const postContainer = document.getElementById("post-container");

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the user's input
        const postContent = postInput.value.trim();

        // Ensure the post isn't empty
        if (postContent) {
            // Create a new post element
            const postElement = document.createElement("div");
            postElement.textContent = postContent;
            postElement.className = "post";

            // Add the post to the container
            postContainer.prepend(postElement);

            // Clear the input
            postInput.value = "";
        }
    });
});

