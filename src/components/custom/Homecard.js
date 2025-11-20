"use client";
import React from "react";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { model } from "@/model";

function Homecard() {
  return (
    <div>
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] bg-gray-500 flex justify-center items-center">
        Video
      </div>

      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black text-center pt-28">
        PROTEGO - Protection on the Go
      </h2>

      <div className="flex justify-center items-center py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {model.map((products) => (
            <div
              key={products.id}
              className="relative w-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all"
            >
              {/* Image Section */}
              <div className="flex justify-center items-center p-6 relative">
                <Link href={products.link}>
                  <div
                    className="slider"
                    style={{
                      margin: "0rem 4rem",
                      height: "15rem",
                      width: "12rem",

                      "--img1": `url(${products.images[0]})`,
                      "--img2": `url(${products.images[1]})`,
                      "--img3": `url(${products.images[2]})`,
                      "--img4": `url(${products.images[3]})`,
                      "--img5": `url(${products.images[4]})`,
                    }}
                  ></div>

                  <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 bg-blue-50 text-gray-900 px-6 py-2 font-medium shadow-md">
                    View Product
                  </div>
                </Link>
              </div>

              {/* Bottom Info Section */}
              <div className="text-center p-5">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {products.name}
                </h2>

                {/* Rating Section */}
                <div>
                  <div className="flex justify-center items-center space-x-1 mb-1 text-yellow-500">
                    {Array.from({ length: Math.floor(products.rating) }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}

                    {products.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>

                  <p className="text-gray-700 text-sm font-medium">
                    {products.reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homecard;
