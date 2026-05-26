const revealTargets = document.querySelectorAll(
    ".section-shell:not(.hero), .stats-band, .timeline-item, .contact-section"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
    }
);

revealTargets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    revealObserver.observe(target);
});

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        button.style.setProperty("--x", `${event.clientX - rect.left}px`);
        button.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });
});
