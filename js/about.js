

document.addEventListener("DOMContentLoaded", () => {
const members = document.querySelectorAll(".team-member");


members.forEach((member, index) => {
member.style.animationDelay = `${index * 0.2}s`;
});
});