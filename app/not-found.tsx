import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-[var(--spacing-section)] pt-32 min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <p className="eyebrow mb-6">404</p>
        <h1
          className="text-balance"
          style={{ fontSize: "var(--text-display-xl)" }}
        >
          Esta página no existe — todavía.
        </h1>
        <p className="mt-8 text-[var(--text-body-lg)] text-[var(--color-stone)] max-w-xl mx-auto leading-relaxed">
          Quizá la moviste de lugar, o quizá aún no la construimos. Si era
          importante, escríbenos.
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Inicio
          </Link>
          <Link href="/contacto" className="btn-secondary">
            Conversemos
          </Link>
        </div>
      </div>
    </section>
  );
}
