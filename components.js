const pages = [
  { file: 'index.html', label: 'Home' },
  { file: 'about.html', label: 'About' },
  { file: 'skills.html', label: 'Skills' },
  { file: 'projects.html', label: 'Projects' },
  { file: 'contact.html', label: 'Contact' },
];

function currentPage() {
  const page = window.location.pathname.split('/').pop();
  return page || 'index.html';
}

class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const activePage = currentPage();
    const links = pages
      .filter((page) => page.file !== activePage)
      .map((page) => `<li><a href="${page.file}">${page.label}</a></li>`)
      .join('');

    this.innerHTML = `
      <header>
        <nav>
          <div class="logo">WORK</div>
          <ul class="nav-links">${links}</ul>
        </nav>
      </header>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer><p>© ${new Date().getFullYear()} Chibuikem Nwaiwu. All rights reserved.</p></footer>`;
  }
}

customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
