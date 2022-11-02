let isOpen = false

function openMenu() {
    const myContainer = document.getElementById("myContainer")

    if(isOpen) {
        myContainer.style.display = "none"
    } else {
        myContainer.style.display = "flex"
        isOpen=true
    }
}