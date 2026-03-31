import { Instagram, Facebook, Printer } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#000000] to-[#5A3BFF]">
              <img src="/LogoAcro.png" alt="Acro Impressões 3D" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              Acro Impressões 3D
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Acro Impressões 3D. Todos os direitos reservados.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              href="https://www.instagram.com/acroimpressoes3d/"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-[#7B5CFF] hover:border-[#7B5CFF]/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            {/* <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-[#7B5CFF] hover:border-[#7B5CFF]/30 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
