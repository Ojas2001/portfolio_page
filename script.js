// Ojas Deodhar - Interactive Portfolio Logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Dynamic Typing Effect
  const phrases = [
    'Production LLM Architectures',
    'Hardware-Accelerated Inference (Gaudi 2 & CUDA)',
    'Fault-Tolerant Text-to-JSON & RAG Pipelines',
    'Multimodal 3D Gaussian Splatting SLAM'
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typed-text');

  function typeEffect() {
    if (!typedEl) return;
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 1800; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // 2. Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const sunSvg = `<svg class="w-[18px] h-[18px] fill-none stroke-current" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  const moonSvg = `<svg class="w-[18px] h-[18px] fill-none stroke-current" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;

  function updateThemeIcon(isLight) {
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = isLight ? sunSvg : moonSvg;
      themeToggleBtn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
      themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    }
  }

  // Check saved preference
  if (localStorage.getItem('portfolio-theme') === 'light') {
    body.classList.add('light-theme');
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      const isLight = body.classList.contains('light-theme');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
      if (window.lucide) lucide.createIcons();
    });
  }

  // 3. Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white');
        b.classList.add('bg-white/5', 'text-gray-400');
      });
      btn.classList.add('bg-indigo-600', 'text-white');
      btn.classList.remove('bg-white/5', 'text-gray-400');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').trim().split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. ASU Decision Theater System Explorer (Interactive Deep-Dive)
  const systemData = {
    'tabular-ai': {
      title: 'Autonomous Tabular AI & Supercomputer Inference',
      tech: 'TableGPT-2, LangChain, Intel Gaudi 2 HPUs, NVIDIA GPUs, optimum-habana, SOL HPC',
      category: 'HPC & Hardware Acceleration',
      desc: 'Architected an autonomous tabular analytics engine on ASU\'s SOL supercomputing cluster. Orchestrates dynamic Python code generation and execution across complex census and spatial datasets. Deployed optimum-habana to unlock native Gaudi 2 matrix accelerators, cutting query response latencies from seconds to near-real-time.'
    },
    'filter-pipeline': {
      title: 'RAG Text-to-JSON Demographic Filter Pipeline',
      tech: 'FastAPI, LangChain, Pydantic, Vector Embeddings, Verification Layer',
      category: 'RAG & Schema Verification',
      desc: 'Translates unstructured natural-language policy queries into validated JSON payloads querying 13 preloaded demographic and socioeconomic sections (1–13 parameters each). Features an automated verification layer to catch hallucinated parameter constraints before database execution.'
    },
    'indicator-search': {
      title: 'Query-to-Indicator Search & Fallback Architecture',
      tech: 'OpenAI, BGE Cross-Encoders, Sentence-Transformers, ChromaDB',
      category: 'Semantic Search & Fallback',
      desc: 'Maps open-ended user inquiries to Commonwealth Fund health indicators. To guarantee high availability during upstream LLM API degradations, engineered a zero-downtime fallback embedding and cross-encoder re-ranking pipeline ensuring 99.9% uptime.'
    },
    'policy-cost': {
      title: 'Health Policy Action Recommender & "Implement" Cost Pipeline',
      tech: 'OpenAI API, Streamlit PoC, Citation Engine, KFF / Academic Data Ingestion',
      category: 'Policy Decision Support',
      desc: 'Delivered an executive decision-support system analyzing Arizona\'s Commonwealth Fund health ranking. Engineered an "Implement" pipeline that calculates cascading indicator trade-offs and estimates state-specific implementation budgets, backing every recommendation with verified citations.'
    },
    'backend-cache': {
      title: 'Health Policy Dashboard Backend & Semantic Caching',
      tech: 'Python, FastAPI, Redis / Semantic Cache, CDC PLACES, Census ACS',
      category: 'API & Semantic Caching',
      desc: 'Engineered the core API backend linking tract-level CDC PLACES and Census ACS indicators across 4 query modes. Built an intelligent semantic caching layer that detects semantically identical policy inquiries, eliminating redundant LLM calls and speeding response times to milliseconds.'
    },
    'geospatial-triage': {
      title: 'Geospatial Healthcare Facility Triage System',
      tech: 'OpenRouteService, Haversine, GeoPandas, Streamlit, Folium, Vector Embeddings',
      category: 'Geospatial & Vector Routing',
      desc: 'Integrated multimodal embeddings (Gemini/OpenAI) with geospatial routing algorithms. Matches patient-described symptoms directly to specialized healthcare clinics, estimating transit times and offering triage recommendations on interactive maps.'
    },
    'curriculum-rag': {
      title: 'Labor-Market Curriculum Skills Alignment RAG',
      tech: 'Google Gemini, ChromaDB, Lightcast Skills Taxonomy',
      category: 'Labor Taxonomy RAG',
      desc: 'Built a vector search pipeline indexing university course catalogs against Lightcast\'s comprehensive labor market skills taxonomy. Allows faculty to identify curricular gaps and generate updated course syllabi aligned with fast-moving tech market demands.'
    }
  };

  const sysTabs = document.querySelectorAll('.sys-tab-btn');
  const sysTitle = document.getElementById('sys-title');
  const sysTech = document.getElementById('sys-tech');
  const sysCategory = document.getElementById('sys-category');
  const sysDesc = document.getElementById('sys-desc');

  if (sysTabs.length > 0) {
    sysTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sysTabs.forEach(t => {
          t.classList.remove('bg-indigo-600/30', 'border-indigo-500', 'text-cyan-400');
          t.classList.add('bg-white/5', 'border-white/10', 'text-gray-300');
        });
        tab.classList.add('bg-indigo-600/30', 'border-indigo-500', 'text-cyan-400');
        tab.classList.remove('bg-white/5', 'border-white/10', 'text-gray-300');

        const sysKey = tab.getAttribute('data-sys');
        const data = systemData[sysKey];
        if (data) {
          if (sysTitle) sysTitle.textContent = data.title;
          if (sysTech) sysTech.textContent = data.tech;
          if (sysCategory) sysCategory.textContent = data.category;
          if (sysDesc) sysDesc.textContent = data.desc;
        }
      });
    });
  }

  // 6. Copy Email Toast Notification
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-notification');

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'deodharojas5@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('deodharojas5@gmail.com');
      });
    });
  });
});
