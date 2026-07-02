import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container>
        <p className="index-num">Error 404</p>
        <h1 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight text-graphite sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
          The page may have been moved or its address has changed.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Overview
          </Button>
          <Button href="/objects" variant="secondary" size="lg">
            Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
