import { Button } from "@/components/button";
import { ArrowRight, Copy } from 'lucide-react'
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main>

      <div className="">Hello World!</div>
      <Button text="Guilherme">
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>

    </main>
  );
}
