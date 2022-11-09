export default function ToggleResponsiveMenu() {
    let isOpen = false;
    const menu = document.querySelector("#menu");
    const toggleMenuButton = document.querySelector("#toggle-menu-button");
    const buttonClose = toggleMenuButton.firstElementChild;
    const buttonOpen = toggleMenuButton.lastElementChild;
    const responsiveMenu = document.querySelector("#responsive-menu");

    const toggleMenu = () => {
        isOpen = !isOpen;
        isOpen ? openMenu() : closeMenu()
    };

    const openMenu = () => {
        responsiveMenu.classList.add("grow");
        responsiveMenu.classList.remove("hidden");
        buttonOpen.className = "hidden";
        buttonClose.className = "block";
    }

    const closeMenu = () => {
        responsiveMenu.classList.remove("grow");
        responsiveMenu.classList.add("hidden");
        buttonOpen.className = "block";
        buttonClose.className = "hidden";
    }

    document.querySelector("#toggle-menu-button").addEventListener("click", toggleMenu);
    menu.addEventListener("click", (e) => {
        if (e.target.tagName !== 'A')
            return
        isOpen = false
        closeMenu()
        const element = document.querySelector(e.target.id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
}