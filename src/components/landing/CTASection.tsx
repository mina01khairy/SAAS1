"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section id="demo" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 md:px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary text-on-primary px-8 py-16 md:p-20 text-center"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)",
            }}
          />
          <div className="relative">
            <h2 className="font-geist text-headline-lg-mobile md:text-display-lg mb-6">
              Ready to resolve tickets before they escalate?
            </h2>
            <p className="font-body-lg text-body-lg text-white/80 max-w-4xl mx-auto mb-10">
              Join thousands of teams using SupportFlow AI to cut response
              times and boost satisfaction scores.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="dark"
                  fullWidth
                  className="bg-white text-primary! hover:bg-white/90"
                  icon={faArrowRight}
                  iconPosition="right"
                >
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
