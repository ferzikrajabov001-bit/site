import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ArrowRight } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <AmbientBackground />
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-pretty text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
