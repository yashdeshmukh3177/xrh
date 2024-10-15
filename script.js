function showPopup(title, content) {
    const popup = document.getElementById("popup");
    popup.querySelector("h2").innerText = title;
    popup.querySelector(".popup-content").innerHTML = content;
    popup.classList.add("active"); // Activate popup class for animation
    popup.style.display = "block"; // Show the popup
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active"); // Remove active class
    setTimeout(() => {
        popup.style.display = "none"; // Hide after animation
    }, 300); // Match timeout with animation duration
}
