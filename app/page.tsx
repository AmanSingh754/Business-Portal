"use client";

import { useEffect, useState } from "react";

const categories = [
  {
    title: "Tools & Power Equipment",
    items: [
      "Cutters",
      "Scissors",
      "Screw drivers",
      "Welding machine rods",
      "Carbides",
      "Nails",
      "Hammers",
      "Many more",
    ],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M14.5 3.5a4 4 0 0 0-5.6 4.6l-6.4 6.4v5h5l6.4-6.4a4 4 0 0 0 4.6-5.6l-2.2 2.2-2.8-2.8 2-2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Cars Paint",
    items: [
      "2K computerised paints",
      "Hardener",
      "Clear",
      "Thinner",
      "Primer",
      "Glower",
      "Putty",
      "PP primer",
      "Many more",
    ],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M6 3h6l7 7-6 6-7-7V3z" fill="currentColor" />
        <circle cx="9" cy="6" r="1.4" fill="#000" />
      </svg>
    ),
  },
  {
    title: "Plumbing Essentials",
    items: [
      "Pipes",
      "Handpump",
      "All equipments",
      "Motor spares",
      "Tap",
      "Tank",
      "Many more",
    ],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M7 4h10v6h-3v5a4 4 0 1 1-8 0v-5H7V4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Electrical Supplies",
    items: ["Wires", "Switches", "Conduits", "Installation gear", "Many more"],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Fasteners & Fixings",
    items: ["Nails", "Screws", "Anchors", "Adhesives", "Sealants"],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M7 6h10v3H7V6zm-1 4h12l-2 8H8l-2-8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Safety & Workwear",
    items: ["Gloves", "Masks", "Helmets", "Workshop protection"],
    tone: "bg-emerald-500/15 text-emerald-800 ring-emerald-400/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3 19 6v6c0 5-3.6 7.7-7 9-3.4-1.3-7-4-7-9V6l7-3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const brands = [
  {
    name: "Asian Paints",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Nippon Paints",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Berger Paints",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Premeir",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Fevicol",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Pidilite",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Link Locks",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Mangalam Rods",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Captain Rods",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "AutoCoat PPG",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Nerolac",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
  {
    name: "Utsav",
    badge: "bg-emerald-500/35 text-emerald-800 ring-emerald-500/60",
  },
];

const team = [
  {
    name: "Arvind Kumar Singh",
    role: "Owner",
    photo: "/team-owner.png",
    phone: "9934987856",
  },
  {
    name: "Akash Singh",
    role: "Team Member",
    photo: "/team-akash.png",
    phone: "7808507257",
  },
  {
    name: "Aman Singh",
    role: "Team Member",
    photo: "/team-aman.jpg",
    phone: "7544029668",
  },
];

const carouselImages = [
  "/marquee-1.png",
  "/marquee-2.jpg",
  "/marquee-3.jpg",
  "/marquee-4.png",
  "/marquee-5.jpg",
  "/marquee-6.png",
  "/marquee-7.jpg",
  "/marquee-8.jpg",
  "/marquee-9.png",
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % carouselImages.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[110vh] bg-gradient-to-b from-emerald-50/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 grid-dots opacity-40" />
      <div className="relative z-10">
      <header className="mx-auto w-full max-w-7xl px-6 py-10 sm:py-12">
        <div className="flex flex-col gap-7 rounded-[32px] border border-emerald-200/70 bg-gradient-to-br from-emerald-50/80 via-white/90 to-emerald-100/70 px-6 py-8 shadow-deep sm:px-9 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/20 text-emerald-900 ring-1 ring-emerald-200/80">
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                <path
                  d="M4 10l8-6 8 6v8a2 2 0 0 1-2 2h-4v-6H10v6H6a2 2 0 0 1-2-2v-8z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-700">
                Hardware + Paints
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
                <span className="relative inline-flex items-center">
                  <span className="absolute -inset-x-3 -bottom-2 h-3 rounded-full bg-emerald-200/80" />
                  <span className="relative whitespace-normal text-emerald-900 sm:whitespace-nowrap">
                    Akash Hardware Store
                  </span>
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-sm text-stone-600 sm:text-base">
                Tools, paints, fittings, and fasteners with a local-first service touch.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-900 sm:text-base md:gap-4">
              <a
                className="rounded-full border border-emerald-300/70 bg-white px-4 py-2 transition hover:border-emerald-400 hover:bg-emerald-50"
                href="#address"
              >
                Address
              </a>
              <a
                className="rounded-full border border-emerald-300/70 bg-white px-4 py-2 transition hover:border-emerald-400 hover:bg-emerald-50"
                href="#categories"
              >
                Products
              </a>
              <a
                className="rounded-full border border-emerald-300/70 bg-white px-4 py-2 transition hover:border-emerald-400 hover:bg-emerald-50"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <a
              className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-deep transition hover:bg-emerald-800 sm:px-5 sm:py-2.5 sm:text-base"
              href="tel:9934987856"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-indigo-500/15 blur-2xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full ring-4 ring-indigo-400/60 shadow-[0_0_60px_rgba(99,102,241,0.45)] sm:h-80 sm:w-80">
              <img
                src="/owner.png"
                alt="Arvind Kumar Singh"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-600">
              Owner
            </p>
            <p className="mt-2 text-2xl font-semibold text-ink">
              Arvind Kumar Singh
            </p>
          </div>
        </div>
        <div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Hi, we're <span className="text-emerald-700">Akash Hardware</span>
          </h2>
          <p className="mt-3 text-base text-stone-700 sm:text-lg">
            Trusted building supplies, tools, paints, and fittings for every work.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white shadow-deep transition hover:bg-emerald-800 sm:px-6 sm:py-3"
              href="tel:9934987856"
            >
              Call Now
            </a>
            <a
              className="rounded-full border border-emerald-900/50 px-5 py-2.5 text-sm font-semibold text-emerald-900 transition hover:border-emerald-900 hover:bg-emerald-900 hover:text-white sm:px-6 sm:py-3"
              href="https://maps.app.goo.gl/jRp5jsU9Whnd1VDNA"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <p className="mt-6 break-words text-xl font-semibold text-emerald-800 sm:text-2xl leading-relaxed">
            <span className="rounded-2xl bg-emerald-500/20 px-2 py-1 text-3xl sm:text-4xl text-emerald-900">
              27+
            </span>{" "}
            सालों का भरोसा। हम आपके मूल्यों का सम्मान करते हैं.
          </p>
          <p className="mt-6 break-words text-lg font-semibold text-stone-700 sm:text-xl leading-relaxed">
            <span className="rounded-2xl bg-emerald-500/20 px-2 py-1 text-2xl font-semibold sm:text-3xl text-emerald-900">
              10,000+
            </span>{" "}
            लग्ज़री कारों और बाइक्स को बेहतरीन डिज़ाइन और पेंटिंग दी गई है
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-emerald-200/60 bg-white/70 shadow-deep">
          <div className="absolute left-4 top-4 z-10 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-900">
            Store Highlights
          </div>
          <div className="carousel-window h-[260px] sm:h-[320px]">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {carouselImages.map((src, index) => (
                <div key={src} className="carousel-slide">
                  <img src={src} alt={`Akash Hardware ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-emerald-900/10" />
          <button
            type="button"
            onClick={() =>
              setSlideIndex(
                (slideIndex - 1 + carouselImages.length) % carouselImages.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200/70 bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-white"
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => setSlideIndex((slideIndex + 1) % carouselImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-emerald-200/70 bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-white"
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </section>
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-2">
        <div className="h-[2px] w-full bg-emerald-200/70" />
      </div>

      <section id="address" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-emerald-900/25 bg-emerald-950/80 p-6 text-white shadow-deep">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">
            Address
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Visit Akash Hardware Store
          </h3>
          <p className="mt-3 break-words text-base text-emerald-100">
            Akash Hardware Store, in front of Ara Machine, Amnour Road, near
            Dhenuki Chowk.
            <br />
            PO/PS - Marhowrah
            <br />
            Dist - Saran
            <br />
            State - Bihar
            <br />
            Pincode - 841418
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-500/25"
            href="https://maps.app.goo.gl/jRp5jsU9Whnd1VDNA"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-4">
        <div className="h-[2px] w-full bg-emerald-200/70" />
      </div>

      <section id="categories" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-900">
              Products
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Explore our store range.
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-600">
            Mix of daily essentials and specialty items, organized for quick pick up.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-emerald-900/25 bg-emerald-950/80 p-6 text-white shadow-deep transition hover:-translate-y-1"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-2 ring-white/20 bg-emerald-500/15 text-emerald-100`}
              >
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-emerald-100">
                {item.items.map((entry) => (
                  <li key={entry} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-sm font-semibold text-emerald-200">
                View range
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-deep">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">
            Trusted Brands
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-emerald-100 sm:text-4xl">
            We sell the brands the world believes in.
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-center text-sm font-semibold text-emerald-100 shadow-deep"
              >
                <span className={`h-2 w-2 rounded-full ring-1 ${brand.badge}`} />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-900">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              People behind the counter.
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-600">
            Family-run service with hands-on support for every customer.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-emerald-900/25 bg-emerald-950/80 p-6 text-center text-white shadow-deep"
            >
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-3xl ring-1 ring-white/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{member.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-emerald-200">
                {member.role}
              </p>
              <p className="mt-3 text-sm font-semibold text-emerald-100">
                {member.phone}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black/80">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-stone-400 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-emerald-200">Akash Hardware Store</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Contact</p>
            <a
              className="mt-2 block font-semibold text-emerald-200 hover:text-emerald-100"
              href="tel:9934987856"
            >
              9934987856
            </a>
            <a
              className="block font-semibold text-emerald-200 hover:text-emerald-100"
              href="tel:7808507257"
            >
              7808507257
            </a>
            <a
              className="block font-semibold text-emerald-200 hover:text-emerald-100"
              href="tel:7544029668"
            >
              7544029668
            </a>
            <a
              className="mt-2 inline-flex break-words font-semibold text-emerald-200 hover:text-emerald-100"
              href="mailto:singhrajputanaaman@gmail.com"
            >
              singhrajputanaaman@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Address</p>
            <p className="mt-2 break-words">
              Akash Hardware Store, in front of Ara Machine, Amnour Road, near
              Dhenuki Chowk.
            </p>
            <p className="mt-2 break-words">PO/PS - Marhowrah</p>
            <p>Dist - Saran</p>
            <p>State - Bihar</p>
            <p>Pincode - 841418</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Connect</p>
            <a
              className="mt-2 inline-flex items-center gap-2 font-semibold text-emerald-200 hover:text-emerald-100"
              href="https://www.instagram.com/arvindsinghrajput01?utm_source=qr&igsh=dHk0ZnB0NngwM2Z6"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm4 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.2-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"
                  fill="currentColor"
                />
              </svg>
              Instagram
            </a>
            <div className="h-2" />
            <a
              className="inline-flex items-center gap-2 font-semibold text-emerald-200 hover:text-emerald-100"
              href="https://share.google/bBRv2XdCK62zXeQc3"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/80 text-white">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
                  <path
                    d="M14.5 8.3V6.1c0-1 .7-1.2 1.2-1.2h1.8V2h-2.5C12.7 2 11 3.5 11 6v2.3H9v3h2V22h3.3V11.3h2.6l.4-3h-3z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Facebook
            </a>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-stone-500">Hours</p>
            <p className="mt-2">Mon - Sun, 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
