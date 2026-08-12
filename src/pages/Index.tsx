import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/c3fa9b79-df75-4ce3-b700-fef18f91f7fa.jpg";
const BANYA_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/b7e34dc9-4919-41ef-9681-7f643c02cb9c.jpg";
const ROOM_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/2d9ba003-6edb-4ef4-9d5b-8a82ab922c86.jpg";
const CABIN_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/7b3c576a-4931-4ff6-ae7e-6ddc02cb5802.jpg";
const TUB_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/560d389a-8b1b-4711-992a-c48cadf08083.jpg";

const rooms = [
  { title: "Баня 1", desc: "Классическая русская баня на дровах, отдельный сруб, купель с холодной водой, терраса с видом на лес", cap: "до 4 чел.", image: BANYA_IMAGE },
  { title: "Баня 2", desc: "Просторная баня с панорамным окном на озеро, финская сауна + русский пар, зона отдыха с диванами", cap: "до 6 чел.", image: CABIN_IMAGE, badge: "Хит" },
  { title: "Баня 3", desc: "Баня-люкс с купелью и бассейном, беседка с мангалом, отдельный вход, идеально для компании", cap: "до 10 чел.", image: ROOM_IMAGE },
];

const offers = [
  { title: "Пакет выходного дня", sub: "ПТ–ВС", items: ["2 ночи в номере", "Баня 3 часа", "Завтраки", "Прокат лодки"] },
  { title: "Романтический уикенд", sub: "для двоих", items: ["2 ночи в люксе", "Баня с вениками", "Ужин при свечах", "Шампанское"], accent: true },
  { title: "Групповой отдых", sub: "от 6 человек", items: ["Коттедж целиком", "Баня на всю группу", "Мангал и беседка"] },
];

const services = [
  { icon: "Flame", title: "Русская баня", desc: "Топим по-чёрному и по-белому. Дровяная печь, берёзовые веники, купель с ледяной водой" },
  { icon: "Fish", title: "Рыбалка", desc: "Снасти напрокат, лодка, опытный гид. Щука, окунь, карп — всё своё" },
  { icon: "UtensilsCrossed", title: "Русская кухня", desc: "Щи, пельмени, шашлыки на мангале. Всё из местных продуктов, рецепты передаются из поколения в поколение" },
  { icon: "TreePine", title: "Прогулки по лесу", desc: "Экотропы вдоль берега озера, сбор грибов и ягод, зимой — лыжи и снегоходы" },
  { icon: "Waves", title: "Купание в озере", desc: "Собственный пляж на озере Банном, лодки и байдарки напрокат" },
  { icon: "Music", title: "Банкеты и торжества", desc: "Свадьбы, юбилеи, корпоративы — сделаем праздник незабываемым" },
];

const gallery = [CABIN_IMAGE, BANYA_IMAGE, ROOM_IMAGE, TUB_IMAGE, HERO_IMAGE, BANYA_IMAGE];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "hsl(40,45%,95%)" }}>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "hsla(25,45%,13%,0.97)" : "hsla(25,45%,13%,0.55)",
          backdropFilter: "blur(8px)",
          borderBottom: scrolled ? "1px solid hsla(32,68%,52%,0.25)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-display text-lg" style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}>
              Н
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-wider" style={{ color: "hsl(40,45%,95%)" }}>
                На Банном
              </span>
              <span className="text-[10px] tracking-[0.2em] font-body uppercase" style={{ color: "hsl(38,78%,62%)" }}>
                на озере Банном
              </span>
            </div>
          </button>

          <nav className="hidden md:flex gap-7 items-center">
            {[
              { label: "О комплексе", id: "about" },
              { label: "Номера", id: "rooms" },
              { label: "Баня", id: "banya" },
              { label: "Услуги", id: "services" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-xs tracking-widest uppercase font-body transition-colors duration-300"
                style={{ color: "rgba(240,230,210,0.8)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(38,78%,62%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,230,210,0.8)")}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="px-5 py-2 text-xs tracking-widest uppercase font-body font-semibold transition-all duration-300"
              style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(38,78%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(32,68%,52%)")}
            >
              Забронировать
            </button>
          </nav>

          <button className="md:hidden" style={{ color: "hsl(40,45%,95%)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-6 flex flex-col gap-5" style={{ background: "hsla(25,45%,13%,0.98)", borderTop: "1px solid hsla(32,68%,52%,0.2)" }}>
            {[
              { label: "О комплексе", id: "about" },
              { label: "Номера", id: "rooms" },
              { label: "Баня", id: "banya" },
              { label: "Услуги", id: "services" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm tracking-widest uppercase text-left font-body" style={{ color: "rgba(240,230,210,0.8)" }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo("booking")} className="px-6 py-3 text-sm tracking-widest uppercase w-full font-body font-semibold" style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}>
              Забронировать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CABIN_IMAGE})`, transform: "scale(1.05)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(25,45%,8%,0.55) 0%, hsla(25,45%,8%,0.35) 45%, hsla(25,45%,8%,0.85) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div
            className="inline-block px-4 py-1.5 mb-6 text-[10px] tracking-[0.35em] uppercase font-body animate-fade-in"
            style={{ border: "1px solid hsla(32,68%,52%,0.5)", color: "hsl(38,78%,62%)", opacity: 0, animationDelay: "0.2s" }}
          >
            ✦ Гостинично-банный комплекс ✦
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-4 animate-fade-in" style={{ color: "hsl(40,45%,95%)", animationDelay: "0.45s", opacity: 0 }}>
            На Банном
          </h1>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: "hsl(32,68%,52%)" }} />
          <p className="text-xl md:text-2xl font-display italic mb-2 animate-fade-in" style={{ color: "hsl(40,45%,95%)", animationDelay: "0.7s", opacity: 0 }}>
            На берегу озера Банного
          </p>
          <p className="text-sm md:text-base tracking-wide mb-10 font-body animate-fade-in" style={{ color: "rgba(240,230,210,0.65)", animationDelay: "0.9s", opacity: 0 }}>
            Русская баня · Уютные номера · Природа Урала
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in" style={{ animationDelay: "1.1s", opacity: 0 }}>
            <button
              onClick={() => setPhoneOpen(true)}
              className="px-9 py-4 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300"
              style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(38,78%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(32,68%,52%)")}
            >
              Забронировать отдых
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-9 py-4 font-body text-sm tracking-widest uppercase transition-all duration-300"
              style={{ border: "1px solid rgba(240,230,210,0.4)", color: "hsl(40,45%,95%)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(38,78%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(240,230,210,0.4)")}
            >
              Узнать больше
            </button>
          </div>
          <div className="flex justify-center gap-12 animate-fade-in" style={{ animationDelay: "1.4s", opacity: 0 }}>
            {[
              { num: "15+", label: "лет на рынке" },
              { num: "20", label: "номеров" },
              { num: "5★", label: "рейтинг" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl" style={{ color: "hsl(38,78%,62%)" }}>{s.num}</div>
                <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "rgba(240,230,210,0.55)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24" style={{ backgroundColor: "hsl(40,45%,95%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>О комплексе</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-base leading-relaxed font-body mb-5" style={{ color: "rgba(35,25,15,0.75)" }}>
                Гостинично-банный комплекс «На Банном» расположен на живописном берегу озера Банного в Башкирии. Это место, где время замедляется, а душа отдыхает от городской суеты.
              </p>
              <p className="text-base leading-relaxed font-body mb-5" style={{ color: "rgba(35,25,15,0.75)" }}>
                Мы строим комплекс с любовью к русским традициям: настоящая баня по старинным рецептам, деревянные срубы с резными наличниками, домашняя кухня с блюдами уральской кулинарии.
              </p>
              <p className="text-base leading-relaxed font-body mb-8" style={{ color: "rgba(35,25,15,0.75)" }}>
                Горный воздух, хрустальная вода озера и запах берёзовых веников — лучшее лекарство от усталости. Приезжайте и почувствуйте настоящий русский отдых.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "MapPin", label: "Озеро Банное, Башкирия" },
                  { icon: "Car", label: "2 часа от Магнитогорска" },
                  { icon: "Home", label: "Деревянные срубы" },
                  { icon: "Star", label: "Семейный отдых" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2">
                    <Icon name={f.icon} fallback="Circle" size={16} style={{ color: "hsl(32,68%,52%)" }} />
                    <span className="text-sm font-body" style={{ color: "rgba(35,25,15,0.7)" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={CABIN_IMAGE} alt="Комплекс На Банном" className="w-full object-cover shadow-xl" style={{ height: "420px" }} />
              <div className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-widest uppercase font-body" style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}>
                С дрону года
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24" style={{ backgroundColor: "hsl(38,35%,90%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>Наши номера</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((r) => (
              <div key={r.title} className="group relative overflow-hidden bg-white transition-all duration-500 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {r.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide" style={{ background: "hsl(0,65%,45%)", color: "#fff" }}>
                      {r.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2" style={{ color: "hsl(25,45%,13%)" }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed font-body mb-4" style={{ color: "rgba(35,25,15,0.6)", minHeight: "72px" }}>{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-body" style={{ color: "rgba(35,25,15,0.5)" }}>{r.cap}</div>
                    <button
                      onClick={() => setPhoneOpen(true)}
                      className="px-4 py-2 text-xs tracking-widest uppercase font-body font-semibold transition-all duration-300"
                      style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "hsl(38,78%,62%)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "hsl(32,68%,52%)")}
                    >
                      Забронировать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANYA */}
      <section id="banya" className="py-24 relative overflow-hidden" style={{ background: "hsl(25,45%,13%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(40,45%,95%)" }}>Русская баня</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <img src={BANYA_IMAGE} alt="Русская баня" className="w-full object-cover shadow-2xl" style={{ height: "380px" }} />
            <div>
              <p className="text-base leading-relaxed font-body mb-8" style={{ color: "rgba(240,230,210,0.75)" }}>
                Наша баня — это целый ритуал. Мы топим печь с утра, подбираем дрова из берёзы и ольхи. Веники — только свежие, заготовленные в июне. Пар — лёгкий, «ядрёный».
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Дровяная печь", sub: "Настоящий жар" },
                  { title: "Купель", sub: "Ключевая вода" },
                  { title: "Берёзовые веники", sub: "Свежие, сезонные" },
                  { title: "Чай на травах", sub: "После бани" },
                ].map((f) => (
                  <div key={f.title} className="p-4" style={{ background: "hsla(40,45%,95%,0.06)", border: "1px solid hsla(32,68%,52%,0.2)" }}>
                    <div className="font-body text-sm font-semibold" style={{ color: "hsl(38,78%,62%)" }}>{f.title}</div>
                    <div className="font-body text-xs mt-1" style={{ color: "rgba(240,230,210,0.55)" }}>{f.sub}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end flex-wrap gap-4">
                <button
                  onClick={() => setPhoneOpen(true)}
                  className="px-7 py-3.5 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "hsl(38,78%,62%)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "hsl(32,68%,52%)")}
                >
                  Забронировать баню
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-24" style={{ backgroundColor: "hsl(40,45%,95%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>Специальные предложения</h2>
            <div className="flex items-center justify-center gap-2 mt-4 mb-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
            <p className="font-body text-sm mb-14" style={{ color: "rgba(35,25,15,0.6)" }}>Сезонные скидки и готовые пакеты для отдыха мечты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((o) => (
              <div
                key={o.title}
                className="relative p-7 flex flex-col"
                style={{
                  background: o.accent ? "hsl(25,45%,13%)" : "#fff",
                  border: o.accent ? "1px solid hsl(32,68%,52%)" : "1px solid hsl(38,35%,85%)",
                  transform: o.accent ? "scale(1.04)" : "none",
                }}
              >
                <h3 className="font-display text-2xl mb-1" style={{ color: o.accent ? "hsl(38,78%,62%)" : "hsl(25,45%,13%)" }}>{o.title}</h3>
                <p className="text-xs uppercase tracking-widest font-body mb-5" style={{ color: o.accent ? "rgba(240,230,210,0.5)" : "rgba(35,25,15,0.5)" }}>{o.sub}</p>
                <ul className="flex-1 mb-6 space-y-2.5">
                  {o.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm font-body" style={{ color: o.accent ? "rgba(240,230,210,0.8)" : "rgba(35,25,15,0.7)" }}>
                      <Icon name="Sparkle" size={13} style={{ color: "hsl(32,68%,52%)" }} />
                      {it}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setPhoneOpen(true)}
                  className="w-full py-3 text-xs tracking-widest uppercase font-body font-semibold transition-all duration-300"
                  style={{
                    background: o.accent ? "hsl(32,68%,52%)" : "transparent",
                    color: o.accent ? "hsl(25,45%,13%)" : "hsl(25,45%,13%)",
                    border: o.accent ? "none" : "1px solid hsl(25,45%,13%)",
                  }}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ backgroundColor: "hsl(38,35%,90%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>Наши услуги</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-7" style={{ background: "hsl(40,45%,95%)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "hsla(32,68%,52%,0.15)" }}>
                  <Icon name={s.icon} fallback="Circle" size={22} style={{ color: "hsl(32,68%,52%)" }} />
                </div>
                <h3 className="font-display text-xl mb-2" style={{ color: "hsl(25,45%,13%)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed font-body" style={{ color: "rgba(35,25,15,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24" style={{ backgroundColor: "hsl(40,45%,95%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>Галерея</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="overflow-hidden group cursor-pointer" style={{ height: "220px" }}>
                <img src={img} alt={`Галерея ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 relative overflow-hidden" style={{ background: "hsl(25,45%,13%)" }}>
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${TUB_IMAGE})` }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4" style={{ color: "hsl(40,45%,95%)" }}>Забронировать</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
            <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
          </div>
          <p className="font-body mb-10 text-sm" style={{ color: "rgba(240,230,210,0.6)" }}>
            Оставьте заявку — мы свяжемся с вами в течение часа и подберём лучший вариант
          </p>
          <form className="grid gap-4 text-left" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(240,230,210,0.5)" }}>Ваше имя</label>
                <input type="text" placeholder="Иван" className="w-full px-4 py-3 text-sm font-body outline-none transition-colors" style={{ background: "hsla(40,45%,95%,0.05)", border: "1px solid hsla(32,68%,52%,0.3)", color: "hsl(40,45%,95%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(32,68%,52%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsla(32,68%,52%,0.3)")} />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(240,230,210,0.5)" }}>Телефон</label>
                <input type="tel" placeholder="+7 (999) 000-00-00" className="w-full px-4 py-3 text-sm font-body outline-none transition-colors" style={{ background: "hsla(40,45%,95%,0.05)", border: "1px solid hsla(32,68%,52%,0.3)", color: "hsl(40,45%,95%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(32,68%,52%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsla(32,68%,52%,0.3)")} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(240,230,210,0.5)" }}>Заезд</label>
                <input type="date" className="w-full px-4 py-3 text-sm font-body outline-none transition-colors" style={{ background: "hsla(40,45%,95%,0.05)", border: "1px solid hsla(32,68%,52%,0.3)", color: "hsl(40,45%,95%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(32,68%,52%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsla(32,68%,52%,0.3)")} />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(240,230,210,0.5)" }}>Выезд</label>
                <input type="date" className="w-full px-4 py-3 text-sm font-body outline-none transition-colors" style={{ background: "hsla(40,45%,95%,0.05)", border: "1px solid hsla(32,68%,52%,0.3)", color: "hsl(40,45%,95%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(32,68%,52%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsla(32,68%,52%,0.3)")} />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(240,230,210,0.5)" }}>Количество гостей</label>
              <select className="w-full px-4 py-3 text-sm font-body outline-none transition-colors" style={{ background: "hsl(25,40%,18%)", border: "1px solid hsla(32,68%,52%,0.3)", color: "hsl(40,45%,95%)" }}>
                <option>1 гость</option>
                <option>2 гостей</option>
                <option>3-4 гостя</option>
                <option>5+ гостей</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-4 font-body font-semibold text-sm tracking-widest uppercase mt-2 transition-all duration-300"
              style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(38,78%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(32,68%,52%)")}
            >
              Отправить заявку
            </button>
            <p className="text-center text-[11px] font-body" style={{ color: "rgba(240,230,210,0.4)" }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ backgroundColor: "hsl(40,45%,95%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(25,45%,13%)" }}>Контакты</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
              <div style={{ width: 40, height: 1, background: "hsl(32,68%,52%)" }} />
              <span style={{ color: "hsl(32,68%,52%)" }}>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["Республика Башкортостан,", "Абзелиловский район,", "озеро Банное"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (904) 808-25-12"] },
              { icon: "Clock", title: "Режим работы", lines: ["Заезд с 14:00", "Выезд до 12:00", "Баня — круглосуточно"] },
            ].map((c) => (
              <div key={c.title} className="p-8 text-center" style={{ background: "hsl(38,35%,90%)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "hsla(32,68%,52%,0.15)" }}>
                  <Icon name={c.icon} fallback="Circle" size={20} style={{ color: "hsl(32,68%,52%)" }} />
                </div>
                <h3 className="font-display text-lg mb-2" style={{ color: "hsl(25,45%,13%)" }}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm font-body" style={{ color: "rgba(35,25,15,0.6)" }}>{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="h-64 flex items-center justify-center" style={{ background: "hsl(38,35%,90%)" }}>
            <div className="text-center">
              <Icon name="Map" size={32} style={{ color: "rgba(35,25,15,0.3)" }} className="mx-auto mb-2" />
              <p className="text-sm font-body" style={{ color: "rgba(35,25,15,0.4)" }}>Карта — Озеро Банное, Башкирия</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "hsl(25,40%,10%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-display text-lg" style={{ background: "hsl(32,68%,52%)", color: "hsl(25,45%,13%)" }}>
                Н
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg" style={{ color: "rgba(240,230,210,0.9)" }}>На Банном</span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(240,230,210,0.4)" }}>Гостинично-банный комплекс</span>
              </div>
            </div>
            <nav className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "О комплексе", id: "about" },
                { label: "Номера", id: "rooms" },
                { label: "Баня", id: "banya" },
                { label: "Услуги", id: "services" },
                { label: "Галерея", id: "gallery" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs font-body" style={{ color: "rgba(240,230,210,0.5)" }}>
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex gap-3">
              {["Phone", "MessageCircle", "Send"].map((icon) => (
                <div key={icon} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsla(32,68%,52%,0.15)" }}>
                  <Icon name={icon} fallback="Circle" size={16} style={{ color: "hsl(32,68%,52%)" }} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span style={{ color: "hsla(32,68%,52%,0.4)" }}>✦</span>
            <div style={{ width: 40, height: 1, background: "hsla(32,68%,52%,0.4)" }} />
            <span style={{ color: "hsla(32,68%,52%,0.4)" }}>✦</span>
          </div>
          <p className="text-center text-xs font-body" style={{ color: "rgba(240,230,210,0.35)" }}>
            © 2024 Гостинично-банный комплекс «На Банном» · Озеро Банное, Башкирия · Все права защищены
          </p>
        </div>
      </footer>

      <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
        <DialogContent style={{ background: "hsl(25,45%,13%)", border: "1px solid hsla(32,68%,52%,0.3)" }}>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-center" style={{ color: "hsl(40,45%,95%)" }}>
              Позвоните для бронирования
            </DialogTitle>
            <DialogDescription className="text-center font-body" style={{ color: "rgba(240,230,210,0.6)" }}>
              Наш менеджер поможет подобрать номер и баню под ваши даты
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "hsla(32,68%,52%,0.15)" }}>
              <Icon name="Phone" size={26} style={{ color: "hsl(32,68%,52%)" }} />
            </div>
            <a
              href="tel:+79048082512"
              className="font-display text-3xl tracking-wide"
              style={{ color: "hsl(38,78%,62%)" }}
            >
              +7 904 808-25-12
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}