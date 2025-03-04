"use client"
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header-2.module.css";
import { MessagesHeader as messages } from "@/utils/messagesHeader";

const Header2 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1); 
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
  };

  return (
    <div className={styles.containerHeader2}>
      <div className={styles.divP}>
        <MdKeyboardArrowLeft size={25} onClick={handlePrev} className={styles.arrow} />

        <div className={styles.textContainer}>
          <AnimatePresence mode="wait">
            <motion.p
              key={messages[index]}
              initial={{ x: direction * 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }} 
              transition={{ duration: 0.6 }}
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <MdKeyboardArrowRight size={25} onClick={handleNext} className={styles.arrow} />
      </div>
    </div>
  );
};

export default Header2;