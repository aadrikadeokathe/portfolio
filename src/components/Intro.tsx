"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { identity } from "@/lib/content";

export default function Intro() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    let n = 0;
    const iv = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 13) + 7);
      setCount(n);
      if (n >= 100) clearInterval(iv);
    }, 90);
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      clearInterval(iv);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.span
              className="block font-serif text-[clamp(38px,10vw,130px)] leading-none tracking-tight text-ivory"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {identity.first}
            </motion.span>
          </div>
          <span className="absolute bottom-[6vh] right-[6vw] font-serif text-[clamp(56px,12vw,150px)] leading-none tracking-tight text-ivory/15">
            {count < 10 ? `0${count}` : count}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
