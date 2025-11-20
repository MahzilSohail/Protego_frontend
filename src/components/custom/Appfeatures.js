"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiMobileDownloadLine } from "react-icons/ri";
import { TbDeviceMobilePin } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

const features = [
  {
    id: "emergency",
    title: "Emergency Alert",
    desc:
      "Instant SOS that notifies guardians and emergency services with one tap. Sends location and live status.",
    icon: <GoAlertFill />,
  },
  {
    id: "geofencing",
    title: "Geo-fencing Alerts",
    desc:
      "Define safe zones. Get automatic alerts when the device exits a protected area.",
    icon: <TbDeviceMobilePin />,
  },
  {
    id: "saferoute",
    title: "Safe Route Suggestion",
    desc:
      "App suggests safer routes based on traffic, past incidents, and preferred paths.",
    icon: <AiOutlineSafety />,
  },
  {
    id: "haptic",
    title: "Haptic Communication",
    desc:
      "Discrete vibrations for silent alerts. 3-vibration pattern means 'guardian en route'.",
    icon: <RiMobileDownloadLine />,
  },
  {
    id: "trustedride",
    title: "Trusted Ride Mode",
    desc:
      "Detects deviations from the intended route and alerts trusted contacts immediately.",
    icon: <FaCar />,
  },
];

export default function ProtegoFeatures() {
  return (
    <section
      className="w-full  py-16"
      aria-labelledby="protego-features-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="protego-features-title"
              className="text-4xl font-bold sm:text-5xl  text-slate-900 leading-tight"
            >
              Protego Smart App Features
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Real-time protection features built for everyday use. From one-tap
              alerts to trusted-ride monitoring, Protego keeps guardians informed.
            </p>

            {/* Feature cards list */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <article
                  key={f.id}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* icon / image circle */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center border border-slate-100">
                    {/* fallback to image if provided */}
                    {/* <img
                      src={f.image}
                      alt={f.title}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%2388b78a'/%3E%3C/svg%3E";
                      }}
                    /> */}
                    <div className="text-4xl text-blue-900 w-10 h-10 object-contain">{f.icon} </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            
          </div>

          {/* Mock phone / visual */}
          <div className="flex items-center justify-center ">
            <motion.div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/image/mockup.webp"
                alt="Protego app mockup"
                className="w-full h-auto rounded-2xl shadow-2xl border border-slate-100"
                onError={(e) => {
                  // small inline fallback illustration if phone mock not available
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='600' viewBox='0 0 420 600'%3E%3Crect width='420' height='600' rx='30' fill='%23f8fafb'/%3E%3Ctext x='50%' y='50%' font-family='Helvetica, Arial' font-size='18' text-anchor='middle' fill='%239aa2a8'%3EProtego App Mockup%3C/text%3E%3C/svg%3E";
                }}
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
