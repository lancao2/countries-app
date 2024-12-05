"use client";
import { MyChart } from "@/components/population";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ countryCode: string }>;
}) {
  const { countryCode } = use(params);
  const [infoCountry, setInfoCountry] = useState<any>();
  const [errors, setErrors] = useState<any[]>([]);
  const router = useRouter();
  const baseurl = process.env.BASEURL;

  const handleProductClick = (countryCode: string) => {
    router.push(`/country/${countryCode}`);
  };

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch(
          `${baseurl}/api/country-info/${countryCode}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setInfoCountry(data);
      } catch (error) {
        console.error("Error:", error);
        setErrors([...errors, error]);
      }
    };

    if (countryCode) {
      fetchCountryInfo();
    }
  }, [countryCode, errors]);

  if (errors.length > 0) {
    return (
      <div>
        <p>Error to find this country</p>
      </div>
    );
  }

  if (!infoCountry) {
    return <div>Hold on...</div>;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-black">
      <div className="w-full lg:w-1/3  bg-white px-4 pt-3 rounded-t-md">
        <div
          className="border-b text-gray-400 text-sm cursor-pointer hover:text-blue-500 pb-4 flex items-center gap-1"
          onClick={() => router.push("/")}
        >
          <ArrowLeft size={17} />
          <p>HOME</p>
        </div>
        <div className=" flex justify-between ">
          <div className="flex items-center gap-2">
            <h1 className="text-5xl">
              {infoCountry.borderCountries.officialName}
            </h1>
            <Image
              src={infoCountry.flagURL.data.flag}
              alt={`${infoCountry.borderCountries.officialName} Flag`}
              width={100}
              height={100}
            />
          </div>
          <p>{countryCode}</p>
        </div>
        <h2 className="mt-4 mx-2">Border countries:</h2>
        <div className="flex gap-4 py-2 overflow-x-scroll">
          {infoCountry.borderCountries.borders.map(
            (country: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-gray-200 rounded-full px-2 text-nowrap cursor-pointer"
                  onClick={() => handleProductClick(country.countryCode)}
                >
                  <p className="text-black">{country.officialName}</p>
                </div>
              );
            }
          )}
        </div>
        <h2 className="mt-4 mx-2">Population by year:</h2>
      </div>
      <MyChart
        data={infoCountry.populationData.data.populationCounts.reverse()}
      />
    </div>
  );
}
