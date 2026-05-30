import './style.css';
import { CONFIG } from './config.js';
import { menuData } from './menuData.js';

function initApp() {
  const app = document.getElementById('app');

  // Check Kill Switch
  if (!CONFIG.isSiteActive) {
    app.innerHTML = `
      <div class="suspension-overlay">
        <h1>HİZMET DURDURULDU</h1>
        <p>${CONFIG.suspensionMessage}</p>
      </div>
    `;
    return;
  }

  // Render Main Layout
  app.innerHTML = `
    <header>
      <div class="logo-title">Eylül</div>
      <div class="logo-subtitle">CAFE & NARGİLE</div>
    </header>
    
    <div class="category-container" id="category-nav">
      <button class="category-btn active" data-id="all">🌟 Tümü</button>
      ${menuData.categories.map(cat => `
        <button class="category-btn" data-id="${cat.id}">
          ${cat.icon} ${cat.name}
        </button>
      `).join('')}
    </div>

    <main id="menu-content"></main>

    <footer>
      <a href="${CONFIG.instagramLink}" class="instagram-btn">📸 Bizi Instagram'da Takip Edin</a>
      <div class="watermark">${CONFIG.brandSignature}</div>
    </footer>
  `;

  const menuContent = document.getElementById('menu-content');
  const categoryBtns = document.querySelectorAll('.category-btn');

  // Render function
  function renderMenu(filterId = 'all') {
    menuContent.innerHTML = '';
    
    const categoriesToRender = filterId === 'all' 
      ? menuData.categories 
      : menuData.categories.filter(c => c.id === filterId);

    categoriesToRender.forEach(cat => {
      const catItems = menuData.items.filter(item => item.categoryId === cat.id);
      
      if (catItems.length === 0) return;

      const section = document.createElement('div');
      section.className = 'menu-section';
      section.id = `section-${cat.id}`;
      
      // Category Title
      const title = document.createElement('h2');
      title.className = 'section-title';
      title.innerHTML = `${cat.icon} ${cat.name}`;
      section.appendChild(title);

      // Hero Image for Category (If filter is specific category, or always show for visual)
      // We will show category hero images if they have one defined.
      // Wait, we need the image to exist. For now, we will add an image placeholder.
      if (cat.image && filterId !== 'all') {
          // Only show hero image when a specific category is clicked to keep 'All' view clean
          const heroImg = document.createElement('img');
          heroImg.src = "/src/assets/images/" + cat.image;
          heroImg.className = 'category-hero-image';
          heroImg.onerror = () => heroImg.style.display = 'none'; // hide if not found
          section.appendChild(heroImg);
      }

      const grid = document.createElement('div');
      grid.className = 'items-grid';

      catItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';
        
        let descHtml = item.description ? `<div class="item-desc">${item.description}</div>` : '';
        
        card.innerHTML = `
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            ${descHtml}
            <div class="item-price">${item.price} TL</div>
          </div>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      menuContent.appendChild(section);
    });
  }

  // Initial render
  renderMenu('all');

  // Category navigation logic
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all
      categoryBtns.forEach(b => b.classList.remove('active'));
      // Add to clicked
      const target = e.currentTarget;
      target.classList.add('active');
      
      // Smooth scroll category nav to center the button
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Render
      const filterId = target.getAttribute('data-id');
      renderMenu(filterId);
    });
  });
}

document.addEventListener('DOMContentLoaded', initApp);
