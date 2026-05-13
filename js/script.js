// creates the contact footer and adds it to every page
const contact = document.createElement('footer');
contact.id = 'contact';
contact.innerHTML = `
  <h2>Connect With Me:</h2>
      <div class="contact-links">
        <p>Email: cynthiaapintado@gmil.com</p>
        <p>Phone: (914) 522-2795</p>
        <p>LET'S CONNECT</p>
        <a href="https://www.linkedin.com/in/cynthia-pintado/" target="_blank">LinkedIn</a>
        <a href="https://github.com/cinkookiess" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/cindy.loo_06/" target="_blank">Instagram</a>
  </div>
`;
document.body.appendChild(contact);

// ── NAVIGATION (changes based on page) ──────────
const nav = document.createElement('nav');

// checks which page you're currently on
const currentPage = window.location.pathname;

if (currentPage.includes('index.html') || currentPage === '/') {
  // full nav for home page
  nav.innerHTML = `
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  `;
} else {
  // only home button for all other pages
  nav.innerHTML = `
    <a href="index.html">← Home</a>
  `;
}

// adds the nav to the top of the page
document.body.prepend(nav);