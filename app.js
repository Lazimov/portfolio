const DATA = {
  name: "Yannis LEVY",
  initials: "YL",
  role: "Étudiant Bac+2 Informatique • Systèmes et Réseaux",
  headline: "Polyvalent, j'étudie particulièrement l'Administration Systèmes et Réseaux ",
  bio: "Je m'intéresse au cloud, aux systèmes, à la virtualisation et à l'automatisation. Je recherche une expérience pour mettre en pratique l'administration de systèmes, Proxmox, AWS, et le monitoring.",
  location: "Nice, France",
  availability: "Alternance",
  email: "y.levy@ecole-ipssi.net",
  cvUrl: "cv.pdf",

  // Chips enrichies (mini descriptions)
  chips: [
    "AWS • S3 / EC2 / IAM",
    "Linux • Debian / Ubuntu / Bash",
    "Réseaux • Cisco / VLAN / Firewall",
    "Virtualisation • Proxmox / VMware",
    "Proxmox • KVM / Snapshots / Backup",
    "Active Directory • Windows Server",
    "Scripting • Bash / PowerShell"
  ],

  links: [
    { label: "GitHub", url: "https://github.com/Lazimov" }
  ],

  // Compétences générales (liste simple)
  skills: [
    "EC2",
    "S3",
    "IAM",
    "Linux",
    "Réseaux",
    "Git",
    "Virtualisation",
    "Proxmox"
  ],

  // Compétences par niveau (chips)
  techLevels: {
    mastered: [
      "Linux",
      "Réseaux",
      "Git",
      "Virtualisation",
      "Proxmox",
      "Windows Server",
      "Active Directory",
      "Bash",
      "VMware"
    ],
    inProgress: [
      "EC2",
      "S3",
      "IAM",
      "Ansible",
      "Vagrant"
    ],
    exploring: [
      "Zabbix",
      "SecOps"
    ]
  },

  // Formation
  education: [
    {
      title: "Bachelor Administration Réseaux, Infra & SecOps",
      school: "IPSSI Nice",
      period: "Depuis septembre 2024"
    },
    {
      title: "Baccalauréat STI2D - Spécialité Systèmes d'Information et Numérique",
      school: "Lycée Saint-Michel",
      period: "2022 - 2024"
    }
  ],

  // Expériences (sans Groupe IES)
  experiences: [
    {
      company: "Infodex",
      role: "Administrateur Système & Réseau (stage)",
      location: "Monaco",
      period: "Mai 2025 - Août 2025",
      bullets: [
        "Mise en place et gestion d’un lab Proxmox pour tester des infrastructures",
        "Préparation de serveurs et postes pour des clients (déploiements, interventions)",
        "Déploiement et gestion de sauvegardes cloud et locales via Veeam",
        "Administration réseaux (VLAN, routage, firewalling)",
        "Interventions préventives et curatives en environnement professionnel"
      ]
    },
    {
      company: "IPSSI",
      role: "Projets pédagogiques (Infra / Automatisation)",
      location: "Nice",
      period: "Depuis septembre 2024",
      bullets: [
        "Mise en place d’une infrastructure complète (AD, serveur Web, firewall pfSense, réplications)",
        "Virtualisation avec Proxmox (snapshots, sauvegardes, gestion des VMs)",
        "Automatisation de déploiements via Vagrant et Ansible",
        "Création de scripts Bash pour l’administration de systèmes Linux"
      ]
    }
  ],

  projects: [
    {
      title: "Administration Linux avec Bash",
      desc: "Création d'un outil de configuration Linux interactif écrit en Bash.",
      tech: ["Linux", "Bash"],
      highlights: [
        "Outil CLI interactif pour la post-installation d’une machine Linux",
        "Compatible Debian et Ubuntu",
        "Regroupe des actions d’administration système courantes (df, free, useradd, etc.)",
        "Écrit entièrement en Bash"
      ],
      code: "https://github.com/Lazimov/projet-Tiger-bash/"
    },
    {
      title: "Portfolio S3 (ce projet)",
      desc: "Hébergement d'un site statique sur Amazon S3 avec politique de bucket et accès public.",
      tech: ["S3", "Static Hosting"],
      highlights: [
        "Hébergement statique via Amazon S3",
        "Configuration de bucket policy et d’accès public",
        "Gestion d’une page d’erreur / redirection 404",
        "Utilisation de HTML, CSS et JavaScript vanilla"
      ],
      code: "#"
    },
    {
      title: "ADZA - Active Directory Zabbix Ansible",
      desc: "Projet collaboratif, Infrastructure à haute disponibilité avec surveillance Active Directory et Zabbix, déployée automatiquement via Vagrant et Ansible.",
      tech: ["Vagrant", "Zabbix", "Active Directory", "Ansible"],
      highlights: [
        "Infrastructure à haute disponibilité avec Active Directory et Zabbix",
        "Provisioning automatique via Vagrant et Ansible",
        "Monitoring centralisé des services",
        "Travail collaboratif et versionné via GitHub"
      ],
      code: "https://github.com/0xsir1s/ADZA"
    }
  ]
};

function byId(id){ return document.getElementById(id); }

function init(){
  byId("name").textContent = DATA.name;
  byId("role").textContent = DATA.role;
  byId("headline").textContent = DATA.headline;
  byId("bio").textContent = DATA.bio;
  byId("location").textContent = DATA.location;
  byId("availability").textContent = DATA.availability;
  byId("email").textContent = DATA.email;
  byId("mailLink").href = `mailto:${DATA.email}`;
  byId("mailLink").textContent = DATA.email;
  byId("year").textContent = new Date().getFullYear();
  byId("footerName").textContent = DATA.name;

  // Avatar avec initiales
  document.querySelector(".avatar").textContent = DATA.initials;

  // Bouton CV (iframe) avec toggle
  const btnCV = byId("btnCV");
  const cvSection = byId("cvSection");
  const cvFrame = byId("cvFrame");

  if (btnCV && cvSection && cvFrame) {
    btnCV.addEventListener("click", (e) => {
      e.preventDefault();

      const isHidden =
        cvSection.style.display === "none" ||
        cvSection.style.display === "";

      if (isHidden) {
        if (!cvFrame.src) {
          cvFrame.src = DATA.cvUrl;
        }
        cvSection.style.display = "block";
        cvSection.scrollIntoView({ behavior: "smooth" });
      } else {
        cvSection.style.display = "none";
      }
    });
  }

  // Chips
  const chips = byId("chips");
  DATA.chips.forEach(c => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = c;
    chips.appendChild(span);
  });

  // Liens
  const links = byId("links");
  DATA.links.forEach(l => {
    const a = document.createElement("a");
    a.className = "link-pill";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    links.appendChild(a);
  });

  // Compétences (liste simple) — toujours générée,
  // mais masquée côté CSS pour n'afficher que les 3 catégories
  const skills = byId("skills");
  if (skills && DATA.skills) {
    DATA.skills.forEach(s => {
      const span = document.createElement("span");
      span.className = "skill";
      span.textContent = s;
      skills.appendChild(span);
    });
  }

  // Compétences par niveau
  const skillsLevels = byId("skillsLevels");
  if (skillsLevels && DATA.techLevels) {
    const levelLabels = {
      mastered: "Maîtrisées",
      inProgress: "En cours d’acquisition",
      exploring: "En exploration"
    };

    skillsLevels.innerHTML = "";

    Object.entries(DATA.techLevels).forEach(([key, list]) => {
      if (!list || !list.length) return;
      const group = document.createElement("div");
      group.className = "skills-group";
      group.innerHTML = `
        <h3 class="skills-group-title">${levelLabels[key] || key}</h3>
        <div class="skills-row">
          ${list.map(item => `<span class="skill">${item}</span>`).join("")}
        </div>
      `;
      skillsLevels.appendChild(group);
    });
  }

  // Formation
  const educationEl = byId("education");
  if (educationEl && DATA.education) {
    DATA.education.forEach(ed => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${ed.title}</h3>
        <p class="muted small">${ed.school} — ${ed.period}</p>
      `;
      educationEl.appendChild(card);
    });
  }

  // Expériences
  const expEl = byId("experiencesList");
  if (expEl && DATA.experiences) {
    DATA.experiences.forEach(exp => {
      const card = document.createElement("div");
      card.className = "card";
      const bulletsHtml = exp.bullets && exp.bullets.length
        ? `<ul class="exp-list">
             ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
           </ul>`
        : "";
      card.innerHTML = `
        <h3>${exp.role}</h3>
        <p class="muted small">${exp.company} — ${exp.location} — ${exp.period}</p>
        ${bulletsHtml}
      `;
      expEl.appendChild(card);
    });
  }

  // Projets
  const projects = byId("projects");
  DATA.projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card project";

    const highlightsHtml = p.highlights && p.highlights.length
      ? `<ul class="project-highlights">
           ${p.highlights.map(h => `<li>${h}</li>`).join("")}
         </ul>`
      : "";

    card.innerHTML = `
      <div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        ${highlightsHtml}
      </div>
      <div class="badges">
        ${p.tech.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
      <div class="actions">
        <a class="link-pill" href="${p.code}" target="_blank" rel="noopener">Code</a>
      </div>
    `;
    projects.appendChild(card);
  });
}

init();
