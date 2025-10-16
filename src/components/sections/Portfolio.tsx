"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, investments, type Category } from "@/data/investments";
import "@/styles/portfolio.css";

/** Фильтр статуса без any */
type StatusFilter = "All" | "Active" | "Exited";

/** Узкий type-guard для Category */
function isCategory(v: string): v is Category {
  return (categories as readonly string[]).includes(v);
}

/** Узкий type-guard для Status */
function isStatus(v: string): v is Exclude<StatusFilter, "All"> {
  return v === "Active" || v === "Exited";
}

export default function Portfolio() {
  // ------------ Состояние фильтров ------------
  const [sector, setSector] = useState<"All" | Category>("All");
  const [region, setRegion] = useState<"All" | string>("All");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [q, setQ] = useState("");

  // ------------ Данные для выпадашек ------------
  const sectors = ["All", ...categories] as const;

  const regions = useMemo(() => {
    const r = new Set<string>();
    investments.forEach((i) => i.region && r.add(i.region));
    return ["All", ...Array.from(r)];
  }, []);

  // ------------ Фильтрация списка ------------
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();

    return investments.filter((it) => {
      const okSector = sector === "All" ? true : it.category === sector;
      const okRegion = region === "All" ? true : it.region === region;
      const okStatus =
        status === "All" ? true : (it.status ?? "Active") === status;

      const okText =
        needle.length === 0
          ? true
          : `${it.name} ${it.description} ${it.region ?? ""}`
              .toLowerCase()
              .includes(needle);

      return okSector && okRegion && okStatus && okText;
    });
  }, [sector, region, status, q]);

  // ------------ Хендлеры без any ------------
  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setSector(v === "All" ? "All" : isCategory(v) ? v : "All");
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setRegion(v);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setStatus(v === "All" ? "All" : isStatus(v) ? v : "All");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  return (
    <section id="portfolio" className="section pf" aria-labelledby="pf-title">
      <div className="container">
        <h2 id="pf-title" className="section-title">
          Investments
        </h2>

        {/* ====================== ПАНЕЛЬ ФИЛЬТРОВ ====================== */}
        <div className="pf-filter-row" role="group" aria-label="Investments filters">
          {/* SECTOR */}
          <div className="pf-box">
            <label className="sr-only" htmlFor="pf-sector">
              Sector
            </label>
            <select
              id="pf-sector"
              className="pf-select"
              value={sector}
              onChange={handleSectorChange}
            >
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "Sector" : s}
                </option>
              ))}
            </select>
            <span className="pf-plus" aria-hidden>
              +
            </span>
          </div>

          {/* REGION */}
          <div className="pf-box">
            <label className="sr-only" htmlFor="pf-region">
              Region
            </label>
            <select
              id="pf-region"
              className="pf-select"
              value={region}
              onChange={handleRegionChange}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r === "All" ? "Region" : r}
                </option>
              ))}
            </select>
            <span className="pf-plus" aria-hidden>
              +
            </span>
          </div>

          {/* STATUS */}
          <div className="pf-box">
            <label className="sr-only" htmlFor="pf-status">
              Status
            </label>
            <select
              id="pf-status"
              className="pf-select"
              value={status}
              onChange={handleStatusChange}
            >
              {(["All", "Active", "Exited"] as const).map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "Status" : s}
                </option>
              ))}
            </select>
            <span className="pf-plus" aria-hidden>
              +
            </span>
          </div>

          {/* SEARCH */}
          <div className="pf-box pf-box--search">
            <label className="sr-only" htmlFor="pf-search">
              Search companies
            </label>
            <input
              id="pf-search"
              className="pf-input"
              type="search"
              value={q}
              onChange={handleSearchChange}
              placeholder="Search"
            />
            <svg className="pf-search-ic" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21 21l-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* ==================== /ПАНЕЛЬ ФИЛЬТРОВ ==================== */}

        {/* ======================== СЕТКА КАРТОЧЕК ======================== */}
        <div className="pf-grid">
          {filtered.map((it) => {
            const logoSrc = it.logo?.startsWith("/") ? it.logo : `/${it.logo}`;
            const isExternal = !!it.href && /^https?:\/\//i.test(it.href);

            const CardInner = (
              <>
                <div className="pf-card-top">
                  <div className="pf-logo">
                    <Image
                      src={logoSrc}
                      alt={it.name}
                      fill
                      sizes="(max-width: 1200px) 40vw, 240px"
                    />
                  </div>
                  <div className="pf-meta">
                    <span className="pf-badge">{it.category}</span>
                    {it.status && (
                      <span className="pf-badge pf-badge--muted">{it.status}</span>
                    )}
                  </div>
                </div>

                <h3 className="pf-title">{it.name}</h3>
                <p className="pf-desc">{it.description}</p>

                <div className="pf-row">
                  {it.region && <span className="pf-sub">{it.region}</span>}
                  {it.year && <span className="pf-sub">{it.year}</span>}
                </div>
              </>
            );

            return isExternal ? (
              <a
                key={it.name}
                href={it.href}
                className="pf-card"
                target="_blank"
                rel="noreferrer"
                aria-label={`${it.name} — ${it.category}`}
              >
                {CardInner}
              </a>
            ) : (
              <Link
                key={it.name}
                href={it.href ?? "#"}
                className="pf-card"
                aria-label={`${it.name} — ${it.category}`}
              >
                {CardInner}
              </Link>
            );
          })}
        </div>
        {/* ====================== /СЕТКА КАРТОЧЕК ====================== */}

        {filtered.length === 0 && (
          <p className="pf-empty" role="status">
            No results. Try other filters.
          </p>
        )}
      </div>
    </section>
  );
}