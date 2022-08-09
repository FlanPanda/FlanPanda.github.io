// To change favicon depending on system/browser color scheme
const faviconScheme = document.getElementById("faviconScheme");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
    if (isDark.matches)
        faviconScheme.href = "assets/images/FS-Favicon_dark-scheme.svg";
    else
        faviconScheme.href = "assets/images/FS-Favicon_light-scheme.svg";
};

changeFavicon();

// To change favicon in realtime upon system/browser update
    // Chrome + Firefox
isDark.addEventListener("change", changeFavicon);
    // Safari
isDark.addListener(changeFavicon);