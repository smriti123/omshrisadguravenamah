import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Article } from "@/data/leelaArticles";

interface Props {
  article: Article;
  open: boolean;
  onClose: () => void;
}

const ArticleReader = ({ article, open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-3 sm:p-6"
          style={{ background: "rgba(45,26,10,.72)", backdropFilter: "blur(3px)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={article.title}
        >
          <motion.article
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-4 w-full max-w-3xl rounded-2xl px-5 py-8 sm:px-10 sm:py-12"
            style={{
              background: "linear-gradient(180deg,#fffdf6 0%,#fdf4e2 100%)",
              border: "1px solid rgba(189,139,66,.4)",
              boxShadow: "0 30px 70px rgba(45,26,10,.45)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="बंद करें"
              className="sticky top-0 float-right -mr-1 -mt-3 flex h-11 w-11 items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(189,139,66,.14)", color: "#7a3a00" }}
            >
              <X size={22} />
            </button>

            <header className="mb-8 text-center">
              <div className="text-2xl leading-none" style={{ color: "#c2410c" }} aria-hidden="true">
                ॐ
              </div>
              <h2
                className="mt-3 font-display text-2xl font-semibold sm:text-4xl"
                style={{ color: "#3d2817" }}
              >
                {article.title}
              </h2>
              <p className="mt-2 font-body text-sm sm:text-base" style={{ color: "#bd8b42" }}>
                {article.author}
              </p>
              <div className="mx-auto mt-5 flex max-w-xs items-center gap-3" style={{ color: "#bd8b42" }}>
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg,rgba(189,139,66,0),#bd8b42)" }}
                />
                <span>✦</span>
                <span
                  className="h-px flex-1"
                  style={{ background: "linear-gradient(90deg,#bd8b42,rgba(189,139,66,0))" }}
                />
              </div>
            </header>

            {article.sections.map((section, si) => (
              <section key={si} className={si > 0 ? "mt-12" : ""}>
                {si > 0 && (
                  <div className="mb-8 text-center">
                    <div
                      className="mx-auto mb-5 h-px max-w-[10rem]"
                      style={{ background: "linear-gradient(90deg,rgba(189,139,66,0),#bd8b42,rgba(189,139,66,0))" }}
                    />
                    <h3 className="font-display text-xl sm:text-2xl" style={{ color: "#3d2817" }}>
                      {section.heading}
                    </h3>
                  </div>
                )}
                {section.dateLine && (
                  <p
                    className="mb-6 text-center font-body text-sm tracking-wide sm:text-base"
                    style={{ color: "rgba(104,66,41,.7)" }}
                  >
                    {section.dateLine}
                  </p>
                )}
                <div className="space-y-6">
                  {section.paragraphs.map((para, pi) => {
                    const isVerse = para.startsWith("“") && para.length < 160;
                    return (
                      <p
                        key={pi}
                        className={
                          isVerse
                            ? "text-center font-display text-lg italic leading-relaxed sm:text-2xl"
                            : "font-body text-[1.05rem] leading-[2] sm:text-[1.18rem]"
                        }
                        style={{ color: isVerse ? "#a05a10" : "rgba(61,40,23,.9)" }}
                      >
                        {para}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}

            <div className="mt-12 text-center">
              <button
                onClick={onClose}
                className="rounded-full px-7 py-3 font-body text-base transition-colors"
                style={{
                  border: "1px solid rgba(189,139,66,.5)",
                  color: "#7a3a00",
                  background: "rgba(255,250,240,.9)",
                }}
              >
                बंद करें
              </button>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ArticleReader;
