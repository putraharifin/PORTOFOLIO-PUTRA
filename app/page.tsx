"use client";

import { useState } from "react";
import { Menu, X, Mail, Send, MapPin, ArrowUpRight, Download, BarChart3, Brain, Globe, ExternalLink, BookOpen } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Lang = "id" | "en";

const CATS = ["All", "Data Analyst", "Machine Learning", "Website", "Android", "Lainnya"];

const projects = [
  {
    id: 1,
    cat: "Data Analyst",
    img: "/projects/1.jpg",
    stack: ["Python", "Tableau"],
    t: {
      id: ["Dasbor Penjualan Ritel", "Dasbor interaktif untuk memantau tren penjualan.", "Dasbor yang menggabungkan data penjualan 3 tahun, menampilkan tren musiman, produk terlaris, dan performa cabang dengan filter interaktif."],
      en: ["Retail Sales Dashboard", "Interactive dashboard to track sales trends.", "A dashboard combining 3 years of sales data, showing seasonality, best sellers and branch performance with interactive filters."],
    },
  },
  {
    id: 2,
    cat: "Machine Learning",
    img: "/projects/2.jpg",
    stack: ["scikit-learn", "Pandas"],
    t: {
      id: ["Prediksi Churn Pelanggan", "Model klasifikasi untuk memprediksi pelanggan berhenti.", "Model gradient boosting dengan akurasi 91% untuk mengidentifikasi pelanggan berisiko berhenti, dilengkapi analisis fitur penting."],
      en: ["Customer Churn Prediction", "Classification model to predict customer exits.", "A gradient boosting model with 91% accuracy that identifies at-risk customers, with feature importance analysis."],
    },
  },
  {
    id: 3,
    cat: "Website",
    img: "/projects/3.jpg",
    stack: ["Next.js", "Tailwind"],
    t: {
      id: ["Website Toko Online", "Situs e-commerce responsif dan cepat.", "Situs e-commerce dengan katalog, keranjang, dan pembayaran, dioptimalkan untuk kecepatan dan SEO."],
      en: ["Online Store Website", "Fast, responsive e-commerce site.", "An e-commerce site with catalog, cart and checkout, optimized for speed and SEO."],
    },
  },
  {
    id: 4,
    cat: "Android",
    img: "/projects/4.jpg",
    stack: ["Kotlin", "Firebase"],
    t: {
      id: ["Aplikasi Pencatat Keuangan", "Aplikasi Android untuk mencatat pengeluaran harian.", "Aplikasi dengan kategori pengeluaran, grafik bulanan, dan sinkronisasi cloud."],
      en: ["Expense Tracker App", "Android app to log daily spending.", "An app with expense categories, monthly charts and cloud sync."],
    },
  },
  {
    id: 5,
    cat: "Lainnya",
    img: "/projects/5.jpg",
    stack: ["Python", "Telegram API"],
    t: {
      id: ["Bot Pengingat Jadwal", "Bot otomatis untuk pengingat kegiatan.", "Bot yang mengirim pengingat jadwal kuliah dan tugas secara otomatis."],
      en: ["Schedule Reminder Bot", "Automated bot for activity reminders.", "A bot that automatically sends class and assignment reminders."],
    },
  },
];

const certs = [
  {
    id: 1,
    img: "/certs/1.jpg",
    y: "2025",
    t: {
      id: ["Google Data Analytics", "Coursera"],
      en: ["Google Data Analytics", "Coursera"],
    },
  },
  {
    id: 2,
    img: "/certs/2.jpg",
    y: "2025",
    t: {
      id: ["Machine Learning Specialization", "DeepLearning.AI"],
      en: ["Machine Learning Specialization", "DeepLearning.AI"],
    },
  },
  {
    id: 3,
    img: "/certs/3.jpg",
    y: "2024",
    t: {
      id: ["Belajar Dasar Pemrograman Web", "Dicoding"],
      en: ["Web Programming Fundamentals", "Dicoding"],
    },
  },
  {
    id: 4,
    img: "/certs/4.jpg",
    y: "2024",
    t: {
      id: ["Juara 2 Lomba Data Science", "Universitas Riau"],
      en: ["2nd Place Data Science Contest", "Universitas Riau"],
    },
  },
];

const NAME = "Muhammad Putra Harifin Pane";

const dataId = {
  nav: ["About", "Pengalaman", "Karya", "Keahlian", "Sertifikat", "Kontak"],
  contactMe: "Hubungi Saya",
  im: "Saya seorang",
  viewPf: "Lihat Portofolio",
  sendMail: "Kirim Email",
  aboutEy: "TENTANG SAYA",
  aboutH: "Kenali Saya",
  ey: ["PENGALAMAN", "KARYA", "KEAHLIAN", "PENCAPAIAN", "RESUME"],
  role: "Data Analyst & Web Developer",
  heroDesc: "Saya mengubah data dan kode menjadi produk yang berguna, mulai dari dasbor analitik hingga aplikasi web.",
  about: [
    "Tentang Saya",
    "Lulusan teknologi informasi dengan minat pada analisis data, machine learning, dan pengembangan web. Terbiasa mengerjakan proyek dari pengumpulan data sampai peluncuran, dengan fokus pada hasil yang bisa diukur.",
  ],
  skillsTitle: "Keahlian",
  skills: [
    ["Analisis Data", "SQL, Python, dan Tableau untuk menggali wawasan dari data."],
    ["Machine Learning", "Membangun dan mengevaluasi model prediktif."],
    ["Pengembangan Web", "React, Next.js, dan Tailwind untuk antarmuka responsif."],
  ],
  projTitle: "Proyek",
  all: "Semua",
  docs: "Dokumentasi",
  demo: "Link Demo",
  expTitle: "Pengalaman",
  exp: [
    {
      co: "PT Data Nusantara",
      loc: "Pekanbaru, Indonesia",
      role: "Data Analyst Intern",
      date: "Jan 2025 - Jun 2025",
      desc: "Membangun dasbor penjualan dan mengotomatiskan laporan mingguan.",
      bullets: ["Membangun 5 dasbor Tableau yang dipakai tim penjualan.", "Mengotomatiskan laporan mingguan dan menghemat 6 jam kerja per minggu.", "Membersihkan dan memodelkan dataset lebih dari 1 juta baris."],
    },
    {
      co: "Studio Web Riau",
      loc: "Remote",
      role: "Frontend Developer",
      date: "Jul 2024 - Des 2024",
      desc: "Mengembangkan situs klien dengan Next.js dan Tailwind.",
      bullets: ["Mengirim 4 situs klien dengan skor Lighthouse di atas 90.", "Menyusun pustaka komponen UI yang dipakai ulang."],
    },
  ],
  certTitle: "Honor & Sertifikat",
  cvTitle: "CV ATS",
  one: "1 Halaman",
  full: "Lengkap",
  dl: "Unduh PDF",
  cv: {
    sum: "Ringkasan Profesional",
    summary: "Analis data dan pengembang web dengan pengalaman membangun dasbor, model prediktif, dan situs responsif. Berorientasi pada hasil dan kolaborasi tim.",
    exp: "Pengalaman Kerja",
    edu: "Pendidikan",
    eduText: "S1 Teknik Informatika, Universitas Riau (2020 - 2024)",
  },
  rights: "Hak cipta dilindungi.",
};

const dataEn: typeof dataId = {
  nav: ["About", "Experience", "Work", "Skills", "Certificates", "Contact"],
  contactMe: "Contact Me",
  im: "I'm a",
  viewPf: "View My Portfolio",
  sendMail: "Send Email",
  aboutEy: "ABOUT ME",
  aboutH: "Get to Know Me",
  ey: ["EXPERIENCE", "WORK", "SKILLS", "ACHIEVEMENTS", "RESUME"],
  role: "Data Analyst & Web Developer",
  heroDesc: "I turn data and code into useful products, from analytics dashboards to web applications.",
  about: ["About Me", "Information technology graduate interested in data analysis, machine learning and web development. Experienced in delivering projects from data collection to launch, with a focus on measurable results."],
  skillsTitle: "Skills",
  skills: [
    ["Data Analysis", "SQL, Python and Tableau to dig insights out of data."],
    ["Machine Learning", "Building and evaluating predictive models."],
    ["Web Development", "React, Next.js and Tailwind for responsive interfaces."],
  ],
  projTitle: "Projects",
  all: "All",
  docs: "Documentation",
  demo: "Live Demo",
  expTitle: "Experience",
  exp: [
    {
      co: "PT Data Nusantara",
      loc: "Pekanbaru, Indonesia",
      role: "Data Analyst Intern",
      date: "Jan 2025 - Jun 2025",
      desc: "Built sales dashboards and automated weekly reporting.",
      bullets: ["Built 5 Tableau dashboards used by the sales team.", "Automated weekly reports, saving 6 hours per week.", "Cleaned and modeled datasets of over 1 million rows."],
    },
    {
      co: "Studio Web Riau",
      loc: "Remote",
      role: "Frontend Developer",
      date: "Jul 2024 - Dec 2024",
      desc: "Developed client websites with Next.js and Tailwind.",
      bullets: ["Shipped 4 client sites with Lighthouse scores above 90.", "Created a reusable UI component library."],
    },
  ],
  certTitle: "Honors & Certificates",
  cvTitle: "ATS CV",
  one: "1 Page",
  full: "Complete",
  dl: "Download PDF",
  cv: {
    sum: "Professional Summary",
    summary: "Data analyst and web developer experienced in building dashboards, predictive models and responsive websites. Results-driven and collaborative.",
    exp: "Work Experience",
    edu: "Education",
    eduText: "B.Sc. Informatics Engineering, Universitas Riau (2020 - 2024)",
  },
  rights: "All rights reserved.",
};

const ids = ["about", "experience", "projects", "skills", "certificates", "contact"];

/*
 * Container utama website.
 *
 * px-6      = 24px kiri/kanan pada mobile
 * sm:px-10  = 40px pada layar small
 * lg:px-16  = 64px pada layar besar
 * max-w-7xl = membatasi lebar konten
 * mx-auto   = membuat konten berada di tengah
 */
//const wrap = "w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16";

const wrap = "site-container";

const icons = [BarChart3, Brain, Globe];

function Head({ e, t }: { e: string; t: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold text-[#F39C12] mb-2">{e}</p>

      <h2 className="text-3xl sm:text-4xl font-bold text-[#EFF3F6]">{t}</h2>
    </div>
  );
}

function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-[#1A1C23] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0D0E12] text-[#EFF3F6] hover:text-[#F39C12]">
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("id");
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("All");
  const [proj, setProj] = useState<(typeof projects)[0] | null>(null);
  const [cert, setCert] = useState<(typeof certs)[0] | null>(null);
  const [cvMode, setCvMode] = useState<"one" | "full">("full");

  const d = lang === "id" ? dataId : dataEn;

  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  const exps = cvMode === "one" ? d.exp.slice(0, 1) : d.exp;

  const initials = NAME.split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  const socials = [
    [FaLinkedin, "https://linkedin.com", "LinkedIn"],
    [Mail, "mailto:you@email.com", "Email"],
    [FaGithub, "https://github.com", "GitHub"],
  ] as const;

  const sec = "py-20 sm:py-24 scroll-mt-16";

  return (
    <div className="bg-[#0D0E12] text-[#EFF3F6] min-h-screen scroll-smooth">
      {/* ========================= NAVBAR ========================= */}

      <header className="sticky top-0 z-40 bg-[#0D0E12]/90 backdrop-blur border-b border-[#1A1C23]">
        <div className={`${wrap} h-16 flex items-center justify-between`}>
          <a href="#top" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#F39C12] text-[#0D0E12] font-bold flex items-center justify-center">{initials}</span>

            <span className="font-semibold hidden sm:block">{NAME}</span>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {d.nav.map((n, i) => (
              <a key={n} href={`#${ids[i]}`} className="text-[#7F8C8D] hover:text-[#F39C12] transition-colors">
                {n}
              </a>
            ))}

            <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="text-[#EFF3F6]">
              <span className={lang === "en" ? "text-[#F39C12]" : ""}>EN</span>

              {" | "}

              <span className={lang === "id" ? "text-[#F39C12]" : ""}>ID</span>
            </button>

            <a href="#contact" className="bg-[#F39C12] text-[#0D0E12] font-semibold rounded-full px-5 py-2">
              {d.contactMe}
            </a>
          </nav>

          {/* Mobile Navigation */}

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="border border-[#7F8C8D] rounded-full px-3 py-1 text-sm">
              {lang === "id" ? "ID" : "EN"}
            </button>

            <button onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="md:hidden bg-[#1A1C23] border-t border-[#0D0E12]">
            <nav className={`${wrap} py-4 flex flex-col`}>
              {d.nav.map((n, i) => (
                <a key={n} href={`#${ids[i]}`} onClick={() => setOpen(false)} className="py-3 text-[#EFF3F6] hover:text-[#F39C12]">
                  {n}
                </a>
              ))}

              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-center bg-[#F39C12] text-[#0D0E12] font-semibold rounded-full py-3">
                {d.contactMe}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ========================= HERO ========================= */}

      <section id="top" className="py-20 sm:py-24">
        <div className={`${wrap} grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
          {/* Hero Text */}

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EFF3F6]">{NAME}</h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#EFF3F6]">
              {d.im} <span className="text-[#F39C12]">Web Developer</span> / <span className="text-[#F39C12]">Data Analyst</span>
            </p>

            <p className="mt-6 mb-8 text-[#7F8C8D] max-w-lg leading-relaxed">{d.heroDesc}</p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="flex items-center gap-2 bg-[#F39C12] text-[#0D0E12] font-semibold rounded-lg px-6 py-3">
                {d.viewPf}

                <ArrowUpRight size={18} />
              </a>

              <a href="mailto:you@email.com" className="flex items-center gap-2 bg-[#1A1C23] text-[#EFF3F6] font-semibold rounded-lg px-6 py-3 hover:text-[#F39C12]">
                <Send size={16} />

                {d.sendMail}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#7F8C8D] mt-10">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Indonesia
              </span>

              <span className="flex items-center gap-2">
                <Mail size={16} />
                you@email.com
              </span>

              <span className="flex items-center gap-3">
                {socials
                  .filter((x) => x[2] !== "Email")
                  .map(([Icon, href, label]) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:text-[#F39C12]">
                      <Icon size={16} />
                    </a>
                  ))}
              </span>
            </div>
          </div>

          {/* Profile Image */}

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] my-6">
              <span className="absolute -inset-4 rounded-full border-2 border-dashed border-[#F39C12]" />

              <span className="absolute -inset-8 rounded-full border border-[#F39C12]/30" />

              <span className="absolute -top-2 right-10 w-3 h-3 rounded-full bg-[#F39C12]" />

              <span className="absolute bottom-6 -left-9 w-2.5 h-2.5 rotate-45 bg-[#F39C12]" />

              <img src="/profile.jpg" alt={NAME} className="relative w-full h-full object-cover rounded-full border-4 border-[#F39C12] bg-[#1A1C23]" />
            </div>

            <span className="mt-8 inline-flex items-center gap-2 bg-[#0D0E12]/70 border border-[#1A1C23] rounded-full px-4 py-1.5 text-sm text-[#EFF3F6]">
              <span className="w-2 h-2 rounded-full bg-[#F39C12]" />
              Software Developer
            </span>
          </div>
        </div>
      </section>

      {/* ========================= ABOUT ========================= */}

      <section id="about" className={sec}>
        <div className={wrap}>
          <Head e={d.aboutEy} t={d.aboutH} />

          <p className="text-[#7F8C8D] max-w-3xl leading-relaxed">{d.about[1]}</p>
        </div>
      </section>

      {/* ========================= SKILLS ========================= */}

      <section id="skills" className={sec}>
        <div className={wrap}>
          <Head e={d.ey[2]} t={d.skillsTitle} />

          <div className="skills-grid">
            {d.skills.map(([t, s], i) => {
              const I = icons[i];

              return (
                <div key={t} className="bg-[#1A1C23] rounded-xl p-6">
                  <I className="text-[#F39C12] mb-4" size={28} />

                  <h3 className="font-semibold text-lg mb-2">{t}</h3>

                  <p className="text-sm text-[#7F8C8D]">{s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= PROJECTS ========================= */}

      <section id="projects" className={sec}>
        <div className={wrap}>
          <Head e={d.ey[1]} t={d.projTitle} />

          <div className="flex flex-wrap gap-3 mb-10">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-[#F39C12] text-[#0D0E12]" : "bg-[#1A1C23] text-[#7F8C8D] hover:text-[#EFF3F6]"}`}>
                {c === "All" ? d.all : c}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {list.map((p) => {
              const [title, short] = p.t[lang];

              return (
                <article key={p.id} onClick={() => setProj(p)} className="bg-[#1A1C23] rounded-xl cursor-pointer overflow-hidden">
                  <div className="rounded-t-xl relative overflow-hidden group aspect-video bg-[#0D0E12]">
                    <img src={p.img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#F39C12] text-[#0D0E12] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-xs text-[#F39C12]">{p.cat}</span>

                    <h3 className="font-semibold text-lg mt-1">{title}</h3>

                    <p className="text-sm text-[#7F8C8D] mt-2">{short}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= EXPERIENCE ========================= */}

      <section id="experience" className={sec}>
        <div className={wrap}>
          <Head e={d.ey[4]} t={d.expTitle} />

          <div className="border-l-2 border-[#1A1C23] relative pl-8 ml-4">
            {d.exp.map((e) => (
              <div key={e.co} className="relative">
                <span className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635]" />

                <div className="bg-[#1A1C23] p-6 rounded-xl mb-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-lg bg-[#0D0E12] text-[#F39C12] font-bold flex items-center justify-center shrink-0">{e.co[0]}</span>

                      <div>
                        <h3 className="font-semibold">{e.co}</h3>

                        <p className="text-sm text-[#7F8C8D]">{e.loc}</p>
                      </div>
                    </div>

                    <span className="text-sm text-[#7F8C8D] sm:text-right">{e.date}</span>
                  </div>

                  <p className="text-[#F39C12] font-medium mt-4">{e.role}</p>

                  <p className="text-sm text-[#7F8C8D] mt-2">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CERTIFICATES ========================= */}

      <section id="certificates" className={sec}>
        <div className={wrap}>
          <Head e={d.ey[3]} t={d.certTitle} />

          <div className="certificates-grid">
            {certs.map((c) => {
              const [title, org] = c.t[lang];

              return (
                <article key={c.id} onClick={() => setCert(c)} className="bg-[#1A1C23] rounded-xl p-4 cursor-pointer">
                  <img src={c.img} alt={title} className="aspect-[4/3] object-cover rounded-lg w-full bg-[#0D0E12]" />

                  <h3 className="font-semibold mt-4">{title}</h3>

                  <p className="text-sm text-[#7F8C8D]">{org}</p>

                  <p className="text-sm text-[#F39C12] mt-1">{c.y}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= CV ========================= */}

      <section id="cv" className={sec}>
        <div className={wrap}>
          <Head e={d.ey[4]} t={d.cvTitle} />

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1A1C23] p-4 rounded-t-xl flex justify-between items-center gap-3 flex-wrap">
              <div className="flex gap-2">
                {(["one", "full"] as const).map((m) => (
                  <button key={m} onClick={() => setCvMode(m)} className={`px-4 py-1.5 rounded-full text-sm font-medium ${cvMode === m ? "bg-white text-black" : "bg-[#0D0E12] text-[#7F8C8D]"}`}>
                    {d[m]}
                  </button>
                ))}
              </div>

              <button onClick={() => window.print()} className="flex items-center gap-2 bg-[#F39C12] text-[#0D0E12] font-semibold py-2 px-4 rounded-lg">
                <Download size={16} />

                {d.dl}
              </button>
            </div>

            <div className="bg-white text-black p-8 sm:p-12 shadow-2xl rounded-b-xl max-w-4xl mx-auto font-sans">
              <h3 className="text-2xl font-bold">{NAME}</h3>

              <p className="text-sm text-gray-600 mt-1">Pekanbaru, Indonesia | you@email.com | linkedin.com/in/username | github.com/username</p>

              <h4 className="font-bold border-b border-black mt-6 mb-2 text-sm">{d.cv.sum}</h4>

              <p className="text-sm leading-relaxed">{d.cv.summary}</p>

              <h4 className="font-bold border-b border-black mt-6 mb-2 text-sm">{d.cv.exp}</h4>

              {exps.map((e) => (
                <div key={e.co} className="mb-4 text-sm">
                  <div className="flex justify-between gap-2">
                    <strong>
                      {e.role}, {e.co}
                    </strong>

                    <span className="text-gray-600 shrink-0">{e.date}</span>
                  </div>

                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    {(cvMode === "one" ? e.bullets.slice(0, 2) : e.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {cvMode === "full" && (
                <>
                  <h4 className="font-bold border-b border-black mt-6 mb-2 text-sm">{d.cv.edu}</h4>

                  <p className="text-sm">{d.cv.eduText}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}

      <footer id="contact" className="bg-[#1A1C23] py-8 mt-20 border-t border-gray-800 text-center text-sm text-[#7F8C8D]">
        <div className={`${wrap} flex flex-col items-center gap-4`}>
          <p>
            © 2026 {NAME}. {d.rights}
          </p>

          <div className="flex gap-4">
            {socials.map(([Icon, href, label]) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="text-[#7F8C8D] hover:text-[#F39C12]">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ========================= PROJECT MODAL ========================= */}

      {proj &&
        (() => {
          const [title, , long] = proj.t[lang];

          return (
            <Modal onClose={() => setProj(null)}>
              <img src={proj.img} alt={title} className="w-full aspect-video object-cover rounded-xl bg-[#0D0E12]" />

              <h3 className="text-2xl font-bold mt-5">{title}</h3>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full text-xs bg-[#F39C12] text-[#0D0E12] font-medium">{proj.cat}</span>

                {proj.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs bg-[#0D0E12] text-[#7F8C8D]">
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-[#7F8C8D] mt-4 leading-relaxed">{long}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href="#" className="flex items-center gap-2 border border-[#7F8C8D] rounded-lg px-4 py-2 text-sm hover:border-[#F39C12] hover:text-[#F39C12]">
                  <BookOpen size={16} />
                  {d.docs}
                </a>

                <a href="#" className="flex items-center gap-2 bg-[#F39C12] text-[#0D0E12] font-semibold rounded-lg px-4 py-2 text-sm">
                  <ExternalLink size={16} />
                  {d.demo}
                </a>
              </div>
            </Modal>
          );
        })()}

      {/* ========================= CERTIFICATE MODAL ========================= */}

      {cert && (
        <Modal onClose={() => setCert(null)}>
          <img src={cert.img} alt={cert.t[lang][0]} className="w-full rounded-xl mt-8 bg-[#0D0E12]" />

          <p className="font-semibold mt-4">{cert.t[lang][0]}</p>

          <p className="text-sm text-[#7F8C8D]">
            {cert.t[lang][1]} · {cert.y}
          </p>
        </Modal>
      )}
    </div>
  );
}
