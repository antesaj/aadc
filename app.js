// ============================================
// Ernest Hemingway — Interactive Website
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTimeline();
  initContemporaries();
  initWorldLiterature();
  initModal();
  initScrollAnimations();
});

// --- Navigation ---
function initNavigation() {
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close mobile menu on link click
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  });
}

// --- Timeline ---
function initTimeline() {
  const container = document.querySelector('.timeline-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  renderTimeline(WORKS);

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const items = container.querySelectorAll('.timeline-item');

      items.forEach(item => {
        if (filter === 'all' || item.dataset.type === filter) {
          item.classList.remove('hidden-filter');
        } else {
          item.classList.add('hidden-filter');
        }
      });

      // Re-run scroll animation check
      checkTimelineVisibility();
    });
  });
}

function renderTimeline(works) {
  const container = document.querySelector('.timeline-container');
  // Keep the timeline-line and timeline-progress
  const line = container.querySelector('.timeline-line');
  const progress = container.querySelector('.timeline-progress');

  // Remove existing items
  container.querySelectorAll('.timeline-item').forEach(el => el.remove());

  works.forEach((work, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.dataset.type = work.type;
    item.dataset.id = work.id;

    const typeLabel = {
      novel: 'Novel',
      stories: 'Story Collection',
      nonfiction: 'Non-Fiction',
      posthumous: 'Posthumous'
    }[work.type] || work.type;

    const typeClass = {
      novel: 'type-novel',
      stories: 'type-stories',
      nonfiction: 'type-nonfiction',
      posthumous: 'type-posthumous'
    }[work.type] || '';

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card" data-work-id="${work.id}">
        <div class="timeline-year">${work.year}</div>
        <h3 class="timeline-title">${work.title}</h3>
        <span class="timeline-type ${typeClass}">${typeLabel}</span>
        <p class="timeline-desc">${work.description}</p>
        <p class="timeline-click-hint">Click to learn more &rarr;</p>
      </div>
    `;

    container.appendChild(item);
  });

  // Add click handlers
  container.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', () => {
      const workId = parseInt(card.dataset.workId);
      const work = WORKS.find(w => w.id === workId);
      if (work) openModal(work);
    });
  });

  // Trigger scroll check
  setTimeout(checkTimelineVisibility, 100);
}

function checkTimelineVisibility() {
  const items = document.querySelectorAll('.timeline-item:not(.hidden-filter)');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('visible');
    }
  });
}

// --- Contemporaries ---
function initContemporaries() {
  const grid = document.getElementById('contemporaries-grid');

  CONTEMPORARIES.forEach(person => {
    const relClass = {
      mentor: 'rel-mentor',
      friend: 'rel-friend',
      rival: 'rel-rival',
      contemporary: 'rel-contemporary'
    }[person.relationship] || 'rel-contemporary';

    const relLabel = person.relationship.charAt(0).toUpperCase() + person.relationship.slice(1);

    const card = document.createElement('div');
    card.className = 'contemporary-card';
    card.innerHTML = `
      <h3 class="contemporary-name">${person.name}</h3>
      <p class="contemporary-years">${person.years}</p>
      <span class="contemporary-relationship ${relClass}">${relLabel}</span>
      <p class="contemporary-desc">${person.description}</p>
      <p class="contemporary-works"><strong>Key Works:</strong> ${person.works}</p>
    `;

    grid.appendChild(card);
  });
}

// --- World Literature ---
function initWorldLiterature() {
  const container = document.getElementById('world-lit-decades');

  // Group by decade
  const decades = {};
  WORLD_LITERATURE.forEach(event => {
    if (!decades[event.decade]) {
      decades[event.decade] = [];
    }
    decades[event.decade].push(event);
  });

  Object.keys(decades).forEach(decade => {
    const group = document.createElement('div');
    group.className = 'decade-group';

    const header = document.createElement('h3');
    header.className = 'decade-header';
    header.textContent = decade;
    group.appendChild(header);

    const events = document.createElement('div');
    events.className = 'decade-events';

    decades[decade].forEach(event => {
      const eventEl = document.createElement('div');
      eventEl.className = 'world-event';
      eventEl.innerHTML = `
        <span class="event-year">${event.year}</span>
        <p class="event-text">${event.text}</p>
      `;
      events.appendChild(eventEl);
    });

    group.appendChild(events);
    container.appendChild(group);
  });
}

// --- Modal ---
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(work) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const typeLabel = {
    novel: 'Novel',
    stories: 'Story Collection',
    nonfiction: 'Non-Fiction',
    posthumous: 'Posthumous'
  }[work.type] || work.type;

  const typeClass = {
    novel: 'type-novel',
    stories: 'type-stories',
    nonfiction: 'type-nonfiction',
    posthumous: 'type-posthumous'
  }[work.type] || '';

  content.innerHTML = `
    <span class="timeline-type ${typeClass}" style="margin-bottom: 0.5rem;">${typeLabel}</span>
    <h2>${work.title}</h2>
    <p class="modal-year">${work.year}</p>

    <div class="modal-section">
      <h3>About This Work</h3>
      <p>${work.description}</p>
    </div>

    <div class="modal-section">
      <h3>Themes</h3>
      <div class="modal-themes">
        ${work.themes.map(t => `<span class="theme-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h3>Background &amp; History</h3>
      <p>${work.background}</p>
    </div>

    <div class="modal-section">
      <h3>Literary Significance</h3>
      <p>${work.significance}</p>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// --- Scroll Animations ---
function initScrollAnimations() {
  // Timeline items
  window.addEventListener('scroll', () => {
    checkTimelineVisibility();
    updateTimelineProgress();
    animateOnScroll();
  });

  // Initial check
  checkTimelineVisibility();
}

function updateTimelineProgress() {
  const timeline = document.querySelector('.timeline-container');
  const progressBar = document.querySelector('.timeline-progress');

  if (!timeline || !progressBar) return;

  const rect = timeline.getBoundingClientRect();
  const timelineTop = rect.top + window.scrollY;
  const timelineHeight = rect.height;
  const scrollPos = window.scrollY + window.innerHeight;
  const progress = Math.min(1, Math.max(0, (scrollPos - timelineTop) / timelineHeight));

  progressBar.style.height = (progress * 100) + '%';
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.bio-card, .contemporary-card, .world-event, .decade-group');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Add initial styles for scroll-animated elements
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.bio-card, .contemporary-card, .world-event');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Trigger initial check
  setTimeout(animateOnScroll, 200);
});
