import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/c3fa9b79-df75-4ce3-b700-fef18f91f7fa.jpg";
const BANYA_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/b7e34dc9-4919-41ef-9681-7f643c02cb9c.jpg";
const ROOM_IMAGE = "https://cdn.poehali.dev/projects/10f9a3c2-afd3-46e0-bc04-eb527887e7d6/files/2d9ba003-6edb-4ef4-9d5b-8a82ab922c86.jpg";

const services = [
  {
    icon: "Flame",
    title: "Банный комплекс",
    desc: "Русская баня с берёзовым паром, фитобочки, хаммам. Панорамный вид на озеро прямо из парилки.",
    image: BANYA_IMAGE,
  },
  {
    icon: "BedDouble",
    title: "Гостиница",
    desc: "Уютные номера с видом на озеро Банное и Уральские горы. Деревянные интерьеры, камин, всё для отдыха.",
    image: ROOM_IMAGE,
  },
  {
    icon: "Waves",
    title: "Активный отдых",
    desc: "Рыбалка, сапборды и каяки на озере, зимой — горные лыжи и сноуборд на склонах Банного.",
    image: HERO_IMAGE,
  },
];

const features = [
  { icon: "Mountain", label: "Уральские горы" },
  { icon: "Droplets", label: "Чистое озеро" },
  { icon: "Wind", label: "Свежий воздух" },
  { icon: "Flame", label: "Настоящая баня" },
  { icon: "Fish", label: "Рыбалка" },
  { icon: "Snowflake", label: "Горные лыжи" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <div className="min-h-screen font-body" style={{ backgroundColor: "hsl(42, 30%, 94%)" }}>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "hsla(152, 28%, 16%, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none text-left">
            <span className="font-display text-xl font-semibold tracking-wider" style={{ color: "hsl(42,30%,94%)" }}>
              НА БАННОМ
            </span>
            <span className="text-xs tracking-[0.25em] font-body uppercase" style={{ color: "hsl(42,70%,62%)" }}>
              Озеро · Баня · Горы
            </span>
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            {[
              { label: "Отдых", id: "services" },
              { label: "О нас", id: "about" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-sm tracking-widest uppercase font-body transition-colors duration-300"
                style={{ color: "rgba(245,235,210,0.8)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(42,70%,62%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,235,210,0.8)")}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="ml-4 px-6 py-2 text-sm tracking-widest uppercase font-body transition-all duration-300"
              style={{ border: "1px solid hsl(38,58%,48%)", color: "hsl(38,58%,48%)" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "hsl(38,58%,48%)";
                e.currentTarget.style.color = "hsl(152,28%,16%)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "hsl(38,58%,48%)";
              }}
            >
              Забронировать
            </button>
          </nav>

          <button className="md:hidden" style={{ color: "hsl(42,30%,94%)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-6 flex flex-col gap-6" style={{ background: "hsla(152,28%,16%,0.98)", borderTop: "1px solid rgba(180,140,60,0.2)" }}>
            {[
              { label: "Отдых", id: "services" },
              { label: "О нас", id: "about" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm tracking-widest uppercase text-left font-body" style={{ color: "rgba(245,235,210,0.8)" }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo("booking")} className="px-6 py-3 text-sm tracking-widest uppercase w-full font-body" style={{ border: "1px solid hsl(38,58%,48%)", color: "hsl(38,58%,48%)" }}>
              Забронировать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(152,28%,16%,0.55) 0%, hsla(152,28%,16%,0.25) 40%, hsla(152,28%,16%,0.75) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.5em] uppercase mb-6 font-body animate-fade-in" style={{ color: "hsl(42,70%,62%)", animationDelay: "0.2s", opacity: 0 }}>
            Гостинично-банный комплекс
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6 animate-fade-in" style={{ color: "hsl(42,30%,94%)", animationDelay: "0.5s", opacity: 0 }}>
            На Банном
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-12 font-body animate-fade-in" style={{ color: "rgba(245,235,210,0.7)", animationDelay: "0.8s", opacity: 0 }}>
            Озеро Банное · Уральские горы · Живая природа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "1.1s", opacity: 0 }}>
            <button
              onClick={() => scrollTo("booking")}
              className="px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase transition-all duration-300"
              style={{ background: "hsl(38,58%,48%)", color: "hsl(152,28%,16%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(42,70%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(38,58%,48%)")}
            >
              Забронировать отдых
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-10 py-4 font-body text-sm tracking-widest uppercase transition-all duration-300"
              style={{ border: "1px solid rgba(245,235,210,0.4)", color: "hsl(42,30%,94%)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(42,70%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(245,235,210,0.4)")}
            >
              Узнать подробнее
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ color: "rgba(245,235,210,0.4)", animationDelay: "1.8s", opacity: 0 }}>
          <span className="text-xs tracking-widest uppercase">Листайте</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(245,235,210,0.4), transparent)" }} />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section style={{ background: "hsl(152,28%,16%)", padding: "2rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                <Icon name={f.icon} fallback="Star" size={20} style={{ color: "hsl(38,58%,48%)" }} />
                <span className="text-xs tracking-widest uppercase font-body" style={{ color: "rgba(245,235,210,0.6)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ backgroundColor: "hsl(42,30%,94%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase font-body mb-3" style={{ color: "hsl(38,58%,48%)" }}>
              Что вас ждёт
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "hsl(152,28%,16%)" }}>
              Отдых на природе
            </h2>
            <div style={{ width: 60, height: 1, background: "hsl(38,58%,48%)", margin: "1rem auto 0" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="group relative overflow-hidden bg-white transition-all duration-500 hover:shadow-2xl" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsla(152,28%,16%,0.6), transparent)" }} />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsla(38,58%,48%,0.9)" }}>
                    <Icon name={s.icon} fallback="Star" size={18} style={{ color: "hsl(152,28%,16%)" }} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-3" style={{ color: "hsl(152,28%,16%)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed font-body" style={{ color: "rgba(30,50,30,0.6)" }}>{s.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs tracking-widest uppercase font-body cursor-pointer transition-all duration-300 hover:gap-4" style={{ color: "hsl(38,58%,48%)" }}>
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ background: "hsl(152,28%,16%)" }}>
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0" style={{ background: "hsla(152,28%,16%,0.82)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase font-body mb-3" style={{ color: "hsl(38,58%,48%)" }}>
                О комплексе
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6" style={{ color: "hsl(42,30%,94%)" }}>
                Место, где<br /><em>отдыхает душа</em>
              </h2>
              <div style={{ width: 48, height: 1, background: "hsl(38,58%,48%)", marginBottom: "2rem" }} />
              <p className="text-base leading-relaxed font-body mb-6" style={{ color: "rgba(245,235,210,0.7)" }}>
                Наш комплекс расположен на берегу живописного озера Банного в Уральских горах. Здесь можно по-настоящему отдохнуть от городской суеты — чистый воздух, тишина леса и тёплая баня делают своё дело.
              </p>
              <p className="text-base leading-relaxed font-body mb-10" style={{ color: "rgba(245,235,210,0.7)" }}>
                Мы принимаем гостей круглый год. Летом — купание, рыбалка и водные прогулки. Зимой — горные лыжи, снегоходы и баня с ароматным паром.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "12", label: "номеров" },
                  { num: "3", label: "бани" },
                  { num: "365", label: "дней в году" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-4xl font-light" style={{ color: "hsl(38,58%,48%)" }}>{stat.num}</div>
                    <div className="text-xs tracking-widest uppercase mt-1 font-body" style={{ color: "rgba(245,235,210,0.5)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={ROOM_IMAGE} alt="Номер с видом на озеро" className="w-full object-cover" style={{ height: "480px" }} />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 -z-10" style={{ border: "2px solid hsla(38,58%,48%,0.3)" }} />
              <div className="absolute -top-4 -right-4 w-24 h-24 -z-10" style={{ border: "1px solid hsla(38,58%,48%,0.2)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24" style={{ backgroundColor: "hsl(42,30%,94%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-body mb-3" style={{ color: "hsl(38,58%,48%)" }}>
            Бронирование
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-4" style={{ color: "hsl(152,28%,16%)" }}>
            Запланируйте отдых
          </h2>
          <div style={{ width: 60, height: 1, background: "hsl(38,58%,48%)", margin: "0 auto 2.5rem" }} />
          <p className="font-body mb-10 text-sm" style={{ color: "rgba(30,50,30,0.6)" }}>
            Оставьте заявку — мы свяжемся с вами в течение часа и подберём лучший вариант
          </p>
          <form className="grid gap-4 text-left" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(30,50,30,0.5)" }}>Имя</label>
                <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 text-sm font-body bg-white outline-none transition-colors" style={{ border: "1px solid hsl(30,15%,82%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(38,58%,48%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsl(30,15%,82%)")} />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(30,50,30,0.5)" }}>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-3 text-sm font-body bg-white outline-none transition-colors" style={{ border: "1px solid hsl(30,15%,82%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(38,58%,48%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsl(30,15%,82%)")} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(30,50,30,0.5)" }}>Дата заезда</label>
                <input type="date" className="w-full px-4 py-3 text-sm font-body bg-white outline-none transition-colors" style={{ border: "1px solid hsl(30,15%,82%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(38,58%,48%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsl(30,15%,82%)")} />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(30,50,30,0.5)" }}>Дата выезда</label>
                <input type="date" className="w-full px-4 py-3 text-sm font-body bg-white outline-none transition-colors" style={{ border: "1px solid hsl(30,15%,82%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(38,58%,48%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsl(30,15%,82%)")} />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase font-body block mb-2" style={{ color: "rgba(30,50,30,0.5)" }}>Пожелания</label>
              <textarea rows={3} placeholder="Количество гостей, предпочтения по номеру..." className="w-full px-4 py-3 text-sm font-body bg-white outline-none transition-colors resize-none" style={{ border: "1px solid hsl(30,15%,82%)" }} onFocus={e => (e.currentTarget.style.borderColor = "hsl(38,58%,48%)")} onBlur={e => (e.currentTarget.style.borderColor = "hsl(30,15%,82%)")} />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-body font-semibold text-sm tracking-widest uppercase mt-2 transition-all duration-300"
              style={{ background: "hsl(38,58%,48%)", color: "hsl(152,28%,16%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(42,70%,62%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(38,58%,48%)")}
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16" style={{ background: "hsl(152,28%,16%)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 text-center max-w-xl mx-auto">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (904) 808-25-12", href: "tel:+79048082512" },
              { icon: "MapPin", label: "Адрес", value: "Башкортостан, озеро Банное (Якты-Куль)", href: null },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center" style={{ border: "1px solid hsla(38,58%,48%,0.3)" }}>
                  <Icon name={c.icon} fallback="Star" size={20} style={{ color: "hsl(38,58%,48%)" }} />
                </div>
                <p className="text-xs tracking-widest uppercase font-body" style={{ color: "rgba(245,235,210,0.5)" }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="font-body text-sm transition-colors duration-300" style={{ color: "hsl(42,30%,94%)" }} onMouseEnter={e => (e.currentTarget.style.color = "hsl(42,70%,62%)")} onMouseLeave={e => (e.currentTarget.style.color = "hsl(42,30%,94%)")}>{c.value}</a>
                ) : (
                  <p className="font-body text-sm" style={{ color: "hsl(42,30%,94%)" }}>{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "hsl(25,30%,22%)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-lg tracking-wider" style={{ color: "rgba(245,235,210,0.8)" }}>НА БАННОМ</span>
          <p className="text-xs font-body tracking-wide" style={{ color: "rgba(245,235,210,0.3)" }}>
            © 2024 Гостинично-банный комплекс «На Банном». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}