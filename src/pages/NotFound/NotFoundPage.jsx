import { PATHS } from '@/app/paths';
import Button from '@/components/ui/Button/Button';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function NotFoundPage() {
  return (
    <section className="section text-center">
      <div className="container">
        <SectionHeading badge="Error 404" title="No encontramos esta página" lead="Es posible que el enlace haya cambiado." />
        <br />
        <Button to={PATHS.home}>Volver al inicio</Button>
      </div>
    </section>
  );
}
