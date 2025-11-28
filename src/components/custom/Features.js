"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaLocationArrow,
  FaMicrophoneAlt,
  FaVideo,
  FaBolt,
  FaAssistiveListeningSystems,
  FaMicrophone,
  FaStopwatch,
  FaSolarPanel,
  FaWaveSquare,
  FaUserShield,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  { icon: <FaBell />, title: "SOS Trigger", desc: "Instant emergency alert sent to guardians with one press." },
  { icon: <FaLocationArrow />, title: "Real-Time Location Sharing", desc: "Share your live location during emergencies for quick help." },
  { icon: <FaMicrophoneAlt />, title: "Live Audio Recording", desc: "Automatically records audio once SOS is activated." },
  { icon: <FaVideo />, title: "Video Auto Recording", desc: "Starts capturing video instantly for real-time evidence." },
  { icon: <FaBolt />, title: "Emergency Safety Tool", desc: "Built-in cutter & current defense for self-protection." },
  { icon: <FaAssistiveListeningSystems />, title: "AI Sound Detection", desc: "Detects screams or distress sounds using AI sensors." },
  { icon: <FaMicrophone />, title: "Voice-Command SOS", desc: "Activate help by simply shouting 'Help!'." },
  { icon: <FaStopwatch />, title: "False Alert Prevention", desc: "Cancels SOS within 5 seconds if pressed by mistake." },
  { icon: <FaSolarPanel />, title: "Solar/Kinetic Charging", desc: "Smart energy charging through sunlight or motion." },
  { icon: <FaWaveSquare />, title: "Haptic Communication", desc: "3 unique vibrations alert you when guardians are on the way." },
  { icon: <FaUserShield />, title: "Guardian & Helpline Integration", desc: "Connects directly to helpline services (15/1122)." },
  { icon: <FaMobileAlt />, title: "App Support", desc: "Seamless mobile app integration for full safety control." },
];

export default function ProtegoFeatures() {
  return (
    <motion.div className="min-h-screen  text-blue-900 flex flex-col items-center py-16 px-6"
    initial={{ opacity: 0, y: 50 }}           
      whileInView={{ opacity: 1, y: 0 }}         
      viewport={{ once: false, amount: 0.4 }}    
      transition={{ duration: 0.8, ease: "easeOut" }}>
      
      {/* Title Section */}
      <h1
        className="text-4xl md:text-5xl text-black font-bold mb-4 text-center">
         Protego Smart Ring Features
      </h1>
      <p className="text-center text-black mb-12 max-w-2xl text-lg">
        Discover how Protego keeps you safe with advanced smart technology, instant alerts, and seamless app integration — all designed to protect you effortlessly.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all"
          >
            <div className="text-4xl text-blue-800 mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-blue-800 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Text */}
      <motion.div
        className="mt-16 text-center text-blue-800 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-black text-lg font-medium">
          Experience <span className="font-bold text-blue-900">Protego</span> — your invisible guardian for every step you take.
        </p>
      </motion.div>
    </motion.div>
  );
}
