const logos = [
  { src: "/clientes-brand/logo-00.webp", alt: "NH Hotels & Resorts" },
  { src: "/clientes-brand/logo-01.webp", alt: "Marriott" },
  { src: "/clientes-brand/logo-02.webp", alt: "NH Hotels & Resorts" },
  { src: "/clientes-brand/logo-03.webp", alt: "Estelar" },
  { src: "/clientes-brand/logo-04.webp", alt: "Grand Hyatt" },
  { src: "/clientes-brand/logo-05.webp", alt: "Tequendama Hoteles" },
  { src: "/clientes-brand/logo-06.webp", alt: "Atton Hoteles" },
  { src: "/clientes-brand/logo-07.webp", alt: "Hilton Bogota" },
  { src: "/clientes-brand/logo-08.webp", alt: "Dann Carlton Hotel & Spa" },
  { src: "/clientes-brand/logo-09.webp", alt: "Hoteles Dann" },
  { src: "/clientes-brand/logo-10.webp", alt: "Exe Hotels" },
  { src: "/clientes-brand/logo-11.webp", alt: "Ibis Hotels" },
  { src: "/clientes-brand/logo-12.webp", alt: "InterContinental Movich Medellin" },
  { src: "/clientes-brand/logo-13.webp", alt: "Hoteles Spiwak" },
  { src: "/clientes-brand/logo-14.webp", alt: "Movich Hotels" },
  { src: "/clientes-brand/logo-15.webp", alt: "JW Marriott" },
  { src: "/clientes-brand/logo-16.webp", alt: "Habitel Hotels" },
  { src: "/clientes-brand/logo-17.webp", alt: "Hotel Caribe Cartagena" },
  { src: "/clientes-brand/logo-18.webp", alt: "W Hotels" },
  { src: "/clientes-brand/logo-19.webp", alt: "Diez Hotel Categoria Colombia" },
  { src: "/clientes-brand/logo-20.webp", alt: "Hotel Spirito by Spiwak" },
  { src: "/clientes-brand/logo-21.webp", alt: "Lagoon Hotel Llanogrande" },
  { src: "/clientes-brand/logo-22.webp", alt: "Four Seasons Hotels and Resorts" },
  { src: "/clientes-brand/logo-23.webp", alt: "Hotel Capital GHL" },
  { src: "/clientes-brand/logo-24.webp", alt: "Fairfield by Marriott Medellin" },
  { src: "/clientes-brand/logo-25.webp", alt: "NH Collection" },
  { src: "/clientes-brand/logo-26.webp", alt: "Sonesta Hotels and Resorts" },
  { src: "/clientes-brand/logo-27.webp", alt: "Irotama Resort" },
  { src: "/clientes-brand/logo-28.webp", alt: "Accor" },
  { src: "/clientes-brand/logo-29.webp", alt: "Hotel Nutibara Medellin" },
  { src: "/clientes-brand/logo-30.webp", alt: "The Charlee Hotels" },
  { src: "/clientes-brand/logo-31.webp", alt: "The Brown at Luxe" },
  { src: "/clientes-brand/logo-32.webp", alt: "Crowne Plaza Barranquilla" },
  { src: "/clientes-brand/logo-33.webp", alt: "Tequendama Hotel Medellin" },
  { src: "/clientes-brand/logo-34.webp", alt: "City Express Hoteles" },
  { src: "/clientes-brand/logo-35.webp", alt: "Colsubsidio" },
  { src: "/clientes-brand/logo-36.webp", alt: "Corferias" },
  { src: "/clientes-brand/logo-37.webp", alt: "Agora Bogota Centro de Convenciones" },
  { src: "/clientes-brand/logo-38.webp", alt: "Centro de Eventos Valle del Pacifico" },
  { src: "/clientes-brand/logo-39.webp", alt: "Centro de Convenciones Cartagena de Indias" },
  { src: "/clientes-brand/logo-40.webp", alt: "Macarena Centro de Negocios & Eventos" },
  { src: "/clientes-brand/logo-41.webp", alt: "D'Groupe" },
  { src: "/clientes-brand/logo-42.webp", alt: "Club El Rodeo" },
  { src: "/clientes-brand/logo-43.webp", alt: "Country Club Ejecutivos" },
  { src: "/clientes-brand/logo-44.webp", alt: "Club Campestre Pereira" },
  { src: "/clientes-brand/logo-45.webp", alt: "Club Campestre de Cali" },
  { src: "/clientes-brand/logo-46.webp", alt: "Club Campestre Medellin Llanogrande" },
  { src: "/clientes-brand/logo-47.webp", alt: "Casal Casa Alimenticia" },
  { src: "/clientes-brand/logo-48.webp", alt: "La Kasta Grill & Wine" },
  { src: "/clientes-brand/logo-49.webp", alt: "Mangiare Pizzeria Enoteca" },
  { src: "/clientes-brand/logo-50.webp", alt: "La Causa Marisqueria" },
  { src: "/clientes-brand/logo-51.webp", alt: "Romero Cocina Artesanal" },
  { src: "/clientes-brand/logo-52.webp", alt: "Izumi Asian Fusion" },
  { src: "/clientes-brand/logo-53.webp", alt: "Casa Soller Cocina Mediterranea" },
  { src: "/clientes-brand/logo-54.webp", alt: "Jalo" },
  { src: "/clientes-brand/logo-55.webp", alt: "Hashtag 98 Hotel" },
  { src: "/clientes-brand/logo-56.webp", alt: "GO Living & Suites" },
  { src: "/clientes-brand/logo-57.webp", alt: "Medicox" },
  { src: "/clientes-brand/logo-58.webp", alt: "SuperPack" },
  { src: "/clientes-brand/logo-59.webp", alt: "Fruta Fresca Origin" },
  { src: "/clientes-brand/logo-60.webp", alt: "Gesproyect" },
  { src: "/clientes-brand/logo-61.webp", alt: "RCD Project" },
  { src: "/clientes-brand/logo-62.webp", alt: "Industrias Mecanicas Dayo" },
];

export default function ClientLogos() {
  const half = [...logos, ...logos];
  const track = [...half, ...half];

  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <p className="text-center font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-10">
        Empresas que confian en nosotros
      </p>
      <div
        className="marquee-track flex gap-6 md:gap-8 items-center w-max hover:[animation-play-state:paused]"
        style={{ animation: "marquee 80s linear infinite" }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center justify-center h-[104px] md:h-[128px] lg:h-[150px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
