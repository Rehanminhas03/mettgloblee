// components/case-studies/ClaimsScope.tsx
// Two-part scope block for the claims case study, with a courier badge row.
import styles from './case-studies.module.css';

type ScopeSection = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
};

export function ClaimsScope({
  couriers,
  sections,
}: {
  couriers: string[];
  sections: ScopeSection[];
}) {
  return (
    <section
      className={styles.scopeBlock}
      aria-labelledby="claims-scope-heading"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>What the recovery covered</p>
        <h2 id="claims-scope-heading">
          Two types of claims, one documented process
        </h2>

        <div className={styles.scopeGrid}>
          {sections.map(s => (
            <article
              key={s.id}
              id={s.id}
              className={styles.scopeCard}
              aria-labelledby={`${s.id}-h`}
            >
              <p className={styles.eyebrow}>{s.eyebrow}</p>
              <h3 id={`${s.id}-h`}>{s.title}</h3>
              <p className={styles.scopeIntro}>{s.intro}</p>

              {/* The courier badges sit inside Part 1 so the names read as part of the logistics work */}
              {s.id === 'courier-claims' && (
                <ul
                  className={styles.badgeRow}
                  aria-label="Couriers we handled claims with"
                >
                  {couriers.map(c => (
                    <li key={c} className={styles.badge}>
                      {c}
                    </li>
                  ))}
                  <li className={`${styles.badge} ${styles.badgeMuted}`}>
                    + more, 20+ partners
                  </li>
                </ul>
              )}

              <ul className={styles.tickList}>
                {s.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
