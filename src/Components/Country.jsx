import style from "./Country.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaMoon, FaArrowLeft } from "react-icons/fa";

export default function CountryApi({ country }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      {selectedCountry ? (
        <div className="bg-neutral-vdarkbluebg h-screen w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <header className="px-12 py-5 flex justify-between items-center w-full bg-neutral-darkblue">
              <h2 className="text-neutral-white text-lg font-semibold ">
                Where in the World?
              </h2>
              <div className="flex space-x-2 items-center">
                <FaMoon className="text-neutral-white text-xs font-light " />
                <p className="text-neutral-white text-sm font-light ">
                  Dark Mode
                </p>
              </div>
            </header>

            <main className="w-full px-12 mt-8">
              <button
                type="click"
                onClick={() => setSelectedCountry(null)}
                className="flex space-x-2 items-center bg-neutral-darkblue py-1 px-4 w-24 shadow-neutral-vdarkblue shadow-md cursor-pointer rounded-md"
              >
                <FaArrowLeft className="text-neutral-white text-sm font-medium" />
                <p className="text-neutral-vlightgray text-sm font-light">
                  Back
                </p>
              </button>

              <section className="w-full mt-14">
                <div className="flex space-x-28 items-center">
                  <div><img className="w-96 h-80" src={selectedCountry.flags.svg} alt="" /></div>
                  <div>
                    <h3 className="text-neutral-white text-lg font-bold mb-5">{selectedCountry.name}</h3>
                    <div className="flex space-x-14 items-start mb-9">
                      <div className="flex flex-col space-y-1 ">
                      <p className="selectdetail">Native Name: <span className="selectdet">{selectedCountry.nativeName}</span></p>
                      <p className="selectdetail">Population: <span className="selectdet">{selectedCountry.population}</span></p>
                      <p className="selectdetail">Region: <span className="selectdet">{selectedCountry.region}</span></p>
                      <p className="selectdetail">Sub Region: <span className="selectdet">{selectedCountry.subregion || "N/A" }</span></p>
                      <p className="selectdetail">Capital: <span className="selectdet">{selectedCountry.capital || "N/A" }</span></p>
                      </div>
                    
                      <div className="flex flex-col space-y-1 ">
                      <p className="selectdetail">Top Level Domain: <span className="selectdet">{selectedCountry.topLevelDomain }</span></p>
                      <p className="selectdetail">Currencies: <span className="selectdet">{selectedCountry.currencies.map((currency) => currency.name).join(",") || "N/A" }</span></p>
                      <p className="selectdetail">Languages: <span className="selectdet">{selectedCountry.languages.map((lang) => lang.name).join(",") || "N/A" }</span></p>                      
                      </div>

                    </div>

                    <div className="flex space-x-5 justify-start items-start">
                      <p className="selectdetail">
                        Border Countries:
                      </p>
                      <div className="flex space-x-3" >
                        {selectedCountry.borders && selectedCountry.borders.length > 0 ? (
                          selectedCountry.borders.map((border, index) => (
                            <button key={index} className="border-btn" type="button">
                              {border}
                            </button>
                          ))
                        ) : (
                          <p className="selectdet">No Borders Available</p>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      ) : (
        <div className={` bg-neutral-vdarkbluebg h-full w-full hide-scrollbar overflow-auto ${style.strollbar}`}>
          <div className="flex flex-col justify-center items-center w-full">
            <header className="px-12 py-5 flex justify-between items-center w-full bg-neutral-darkblue">
              <h2 className="text-neutral-white text-lg font-semibold ">
                Where in the World?
              </h2>
              <div className="flex space-x-2 items-center">
                <FaMoon className="text-neutral-white text-xs font-light " />
                <p className="text-neutral-white text-sm font-light ">
                  Dark Mode
                </p>
              </div>
            </header>

            <main className="w-full px-12 mt-8">
                <div className="bg-neutral-darkblue w-64 mb-7 py-3 px-4 flex space-x-3 items-center rounded-md">
                    <button type="button">
                        <FaSearch className="text-neutral-white text-sm font-medium" />
                    </button>
                    <input className="inp" type="text" placeholder="Search your country..." />
                </div>
            
            <section className="mb-8">
            <div className="disp ">
              {country.map((count) => (
                <div
                  key={count.name}
                  onClick={() => handleCountry(count)}
                  className="countrydisp cursor-pointer"
                >
                  <div>
                    <img className="w-full rounded-t-md" src={count.flags.svg} alt="" />
                  </div>
                  <div className="py-4 px-3">
                    <h3 className="text-neutral-white text-base font-medium mb-3">
                      {count.name}
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <p className="detail">
                        Population:{" "}
                        <span className="det">{count.population}</span>
                      </p>
                      <p className="detail">
                        Region: <span className="det">{count.region}</span>
                      </p>
                      <p className="detail">
                        Capital:{" "}
                        <span className="det">{count.capital || "N/A"}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
CountryApi.propTypes = {
  country: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      capital: PropTypes.string,
      region: PropTypes.string.isRequired,
    })
  ).isRequired,
  
};
