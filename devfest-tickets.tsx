"use client";
import { motion, AnimatePresence } from "framer-motion";
import ticketYellow from "@/public/yellow-ticket_bokooz.svg";
import ticketBlue from "@/public/blue-ticket_zqy1z2.svg";
import ticketGreen from "@/public/green-ticket_d973oo.svg";
import Image from "next/image";

export default function DevfestTickets() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center overflow-hidden relative bg-hero">
        <div className="flex justify-center -space-x-[22rem] absolute -bottom-36">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 400, x: 160, opacity: 0, rotate: 90 }}
              animate={{
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 60,
              }}
              exit={{ y: 400, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                y: { duration: 1.1 },
                x: { delay: 1.2, duration: 0.5 },
                opacity: { duration: 0 },
                rotate: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={ticketGreen}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                y: 250,
                opacity: 0,
                rotate: 90,
              }}
              animate={{
                y: -45,
                opacity: 1,
              }}
              exit={{ y: 250, opacity: 0 }}
              transition={{
                duration: 2,
                delay: 1,
                y: { duration: 1 },
                opacity: { duration: 1 },
                rotate: { delay: 1, duration: 1 },
              }}
              viewport={{ once: true }}
              className="z-50"
            >
              <Image
                src={ticketBlue}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 400, opacity: 0, x: -160, rotate: 90 }}
              animate={{
                y: 0,
                opacity: 1,
                x: 0,
                rotate: 120,
              }}
              exit={{ y: 400, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                y: { duration: 1.1 },
                x: { delay: 1.2, duration: 0.5 },
                opacity: { duration: 0 },
                rotate: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={ticketYellow}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
