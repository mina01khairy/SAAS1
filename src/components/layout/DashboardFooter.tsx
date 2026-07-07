export function DashboardFooter() {
  return (
    <footer className="w-full py-8 bg-surface-bright border-t border-outline-variant/30 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-gutter gap-4">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} SupportFlow AI. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Security
          </a>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
}
