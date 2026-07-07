import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faGlobe, faAt } from "@fortawesome/free-solid-svg-icons";

const productLinks = ["Features", "Integrations", "API Docs"];
const companyLinks = ["About", "Careers", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Security", "Status"];

export function PublicFooter() {
  return (
    <footer className="w-full py-16 bg-surface-bright border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-gutter gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-on-surface rounded flex items-center justify-center">
              <FontAwesomeIcon icon={faBolt} className="text-white text-[10px]" />
            </div>
            <span className="font-headline-md text-headline-md font-bold text-on-surface">
              SupportFlow AI
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl text-center md:text-left">
            Building the future of automated customer operations. Precision at
            scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-widest">
              Product
            </span>
            {productLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-widest">
              Company
            </span>
            {companyLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faAt} />
            </a>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">
            &copy; {new Date().getFullYear()} SupportFlow AI. All rights reserved.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-gutter mt-12 pt-8 border-t border-outline-variant/10 flex flex-wrap justify-center gap-6">
        {legalLinks.map((l) => (
          <a
            key={l}
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
