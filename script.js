const SITE_CONFIG = {
    appStoreUrl: "",
    supportEmail: "raduoprea34@gmail.com"
};

function applyAppStoreLinks() {
    const appStoreLinks = document.querySelectorAll("[data-app-store-link]");

    appStoreLinks.forEach((link) => {
        if (SITE_CONFIG.appStoreUrl) {
            link.href = SITE_CONFIG.appStoreUrl;
            link.classList.remove("is-disabled");
            link.removeAttribute("aria-disabled");
        } else {
            link.href = "#";
            link.classList.add("is-disabled");
            link.setAttribute("aria-disabled", "true");
            link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        }
    });
}

function applySupportEmail() {
    const supportLinks = document.querySelectorAll("[data-support-email]");

    supportLinks.forEach((link) => {
        link.href = `mailto:${SITE_CONFIG.supportEmail}`;
        link.textContent = SITE_CONFIG.supportEmail;
    });
}

function createFloatingBubbles() {
    const specs = [
        { x: "4%", size: "16px", duration: "12s", delay: "-2s", drift: "16px" },
        { x: "9%", size: "24px", duration: "16s", delay: "-7s", drift: "-10px" },
        { x: "15%", size: "30px", duration: "18s", delay: "-11s", drift: "-12px" },
        { x: "22%", size: "14px", duration: "11s", delay: "-5s", drift: "10px" },
        { x: "29%", size: "20px", duration: "14s", delay: "-8s", drift: "12px" },
        { x: "37%", size: "12px", duration: "10s", delay: "-1s", drift: "-8px" },
        { x: "44%", size: "26px", duration: "18s", delay: "-13s", drift: "14px" },
        { x: "52%", size: "18px", duration: "13s", delay: "-6s", drift: "-12px" },
        { x: "60%", size: "22px", duration: "15s", delay: "-10s", drift: "18px" },
        { x: "68%", size: "14px", duration: "12s", delay: "-4s", drift: "-10px" },
        { x: "76%", size: "28px", duration: "19s", delay: "-12s", drift: "20px" },
        { x: "84%", size: "16px", duration: "11s", delay: "-3s", drift: "-8px" },
        { x: "90%", size: "32px", duration: "20s", delay: "-9s", drift: "-10px" },
        { x: "95%", size: "12px", duration: "10s", delay: "-2s", drift: "8px" }
    ];

    specs.forEach((spec) => {
        const bubble = document.createElement("span");
        bubble.className = "floating-bubble";
        bubble.style.setProperty("--x", spec.x);
        bubble.style.setProperty("--size", spec.size);
        bubble.style.setProperty("--duration", spec.duration);
        bubble.style.setProperty("--delay", spec.delay);
        bubble.style.setProperty("--drift", spec.drift);
        document.body.appendChild(bubble);
    });
}

applyAppStoreLinks();
applySupportEmail();
createFloatingBubbles();
