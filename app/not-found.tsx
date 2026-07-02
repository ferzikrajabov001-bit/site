import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <Container>
        <p className="index-num">Ошибка 404</p>
        <h1 className="mt-6 max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight text-graphite sm:text-5xl">
          Страница не найдена
        </h1>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
          Возможно, страница была перемещена или её адрес изменился.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            На главную
          </Button>
          <Button href="/objects" variant="secondary" size="lg">
            Портфель
          </Button>
        </div>
      </Container>
    </section>
  );
}
