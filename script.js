// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("show"));
  });
}

// News search (simple: checks text inside each news item)
const newsSearch = document.getElementById("newsSearch");
const clearNews = document.getElementById("clearNews");
const newsItems = document.querySelectorAll(".news-item");
const noResults = document.getElementById("noResults");

function runNewsSearch() {
  const q = (newsSearch.value || "").toLowerCase().trim();
  let shown = 0;

  newsItems.forEach(item => {
    const match = item.textContent.toLowerCase().includes(q);
    item.style.display = match ? "block" : "none";
    if (match) shown++;
  });

  if (noResults) noResults.style.display = shown ? "none" : "block";
}

if (newsSearch) newsSearch.addEventListener("input", runNewsSearch);

if (clearNews && newsSearch) {
  clearNews.addEventListener("click", () => {
    newsSearch.value = "";
    runNewsSearch();
    newsSearch.focus();
  });
}

// Contact form (simple validation)
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return (formMsg.textContent = "Please fill in all fields.");
    if (!email.includes("@") || !email.includes(".")) return (formMsg.textContent = "Please enter a valid email.");
    formMsg.textContent = "Message sent (demo only).";
    contactForm.reset();
  });
}

// Back to top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (!toTop) return;
  toTop.style.display = window.scrollY > 400 ? "block" : "none";
});
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
