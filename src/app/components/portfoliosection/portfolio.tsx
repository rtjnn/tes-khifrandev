"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type PortfolioItem = {
  id: number;
  gambar: string;
  nama: string;
  jenis: "web" | "mobile";
  text: string;
};

const data: PortfolioItem[] = [
  {
    id: 1,
    gambar: "/portfolio/adaquran.png",
    nama: "adaquran",
    jenis: "mobile",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    gambar: "/portfolio/arfaqua.png",
    nama: "arfaqua",
    jenis: "mobile",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: 3,
    gambar: "/portfolio/ensiklopedia.png",
    nama: "ensiklopedia",
    jenis: "web",
    text: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    id: 4,
    gambar: "/portfolio/flashkids.png",
    nama: "flashkids",
    jenis: "mobile",
    text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: 5,
    gambar: "/portfolio/fluffy.png",
    nama: "fluffy",
    jenis: "web",
    text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
  },
  {
    id: 6,
    gambar: "/portfolio/forumdiskusi.png",
    nama: "forumdiskusi",
    jenis: "mobile",
    text: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
  },
  {
    id: 7,
    gambar: "/portfolio/goeat.png",
    nama: "goeat",
    jenis: "mobile",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    id: 8,
    gambar: "/portfolio/iscooter.png",
    nama: "iscooter",
    jenis: "mobile",
    text: "In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis.",
  },
  {
    id: 9,
    gambar: "/portfolio/ksp.png",
    nama: "ksp",
    jenis: "mobile",
    text: "Vivamus quis mi. Phasellus a est. Phasellus magna.",
  },
  {
    id: 10,
    gambar: "/portfolio/maka.png",
    nama: "maka",
    jenis: "web",
    text: "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.",
  },
  {
    id: 11,
    gambar: "/portfolio/omahsampah.png",
    nama: "omahsampah",
    jenis: "mobile",
    text: "Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis.",
  },
  {
    id: 12,
    gambar: "/portfolio/price.png",
    nama: "price",
    jenis: "web",
    text: "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.",
  },
  {
    id: 13,
    gambar: "/portfolio/scorein.png",
    nama: "scorein",
    jenis: "mobile",
    text: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
  },
  {
    id: 14,
    gambar: "/portfolio/siraport.png",
    nama: "siraport",
    jenis: "web",
    text: "Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.",
  },
  {
    id: 15,
    gambar: "/portfolio/spk.png",
    nama: "spk",
    jenis: "web",
    text: "Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor.",
  },
  {
    id: 16,
    gambar: "/portfolio/startout.png",
    nama: "startout",
    jenis: "mobile",
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  },
  {
    id: 17,
    gambar: "/portfolio/univs.png",
    nama: "univs",
    jenis: "mobile",
    text: "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
  },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const filteredData =
    filter === "all" ? data : data.filter((item) => item.jenis === filter);

  return (
    <>
      <div id="portfolio" className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <h2 className="text-3xl font-bold mb-12">
          Our <span className="text-yellow-400">Portfolio</span>
        </h2>

        {/* Filter Button */}
        <div className="mb-8 flex gap-4 justify-center">
          {["all", "web", "mobile"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as "all" | "web" | "mobile")}
              className={`px-4 py-2 rounded-full border transition ${
                filter === type
                  ? "bg-yellow-600 text-white"
                  : "bg-transparent border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          <AnimatePresence mode="wait">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <a
                  className="group block rounded-xl overflow-hidden focus:outline-none"
                  href="#"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                      <Image
                        width={1000}
                        height={1000}
                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                        src={item.gambar}
                        alt={`Portfolio ${item.id}`}
                      />
                    </div>

                    <div className="grow p-4">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {item.nama}
                      </h3>
                      <p className="mt-3 text-gray-600 dark:text-neutral-400">
                        {item.text}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                        Read more
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioSection;
