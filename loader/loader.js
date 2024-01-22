document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event triggered");
    setTimeout(() => {
        hideLoader();
        showContent();
        const loader = document.getElementById("loader");
        loader.classList.add("visible");
    }, 1000);

    function hideLoader() {
        console.log("Hiding loader");
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";
        }
    }

    function showContent() {
        console.log("Showing content");
        const content = document.querySelector(".content");
        if (content) {
            content.classList.remove("hidden");
        }
    }
});
