// loader.js
const loaderModule = (function () {
    const loader = document.getElementById("loader");
    const loadingImage = document.getElementById("loading-image");

    function hideLoader() {
        loader.style.display = "none";
    }

    function showLoader() {
        loader.style.display = "flex";
    }

    function rotateLoadingImage() {
        loadingImage.style.transform = "rotate(0deg)";
    }

    return {
        hideLoader,
        showLoader,
        rotateLoadingImage,
    };
})();

window.loaderModule = loaderModule;
