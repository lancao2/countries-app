"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState<any[]>([]);
  const router = useRouter();
  const baseurl = process.env.BASEURL;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${baseurl}/api/countries`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleProductClick = (countryCode: string) => {
    router.push(`/country/${countryCode}`);
  };

  if (countries.length === 0) {
    return <div>Carregando países...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 lg:px-20">
      {countries.map((country, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-white hover:bg-slate-200 text-black rounded-md w-1/3 lg:w-1/6 cursor-pointer "
          onClick={() => handleProductClick(country.countryCode)}
        >
          <h1 className="text-5xl font-extrabold">{country.countryCode}</h1>
          <p className="text-center">{country.name}</p>
        </div>
      ))}
    </div>
  );
}
