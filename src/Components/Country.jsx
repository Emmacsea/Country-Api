import style from "./Country.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaMoon, FaSun, FaArrowLeft } from "react-icons/fa";

export default function CountryApi({ country }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectMode, setSelectMode] = useState(true);

  const handleCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleMode = () => {
    setSelectMode(!selectMode);
  };

  return (
    <div>
      {selectedCountry ? (
        <div
          className={`${
            selectMode ? "bg-neutral-vdarkbluebg" : "bg-neutral-vlightgray"
          } md:h-screen sm:h-full w-full `}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <header
              className={`md:px-12 sm:px-7 py-5 flex justify-between items-center w-full ${
                selectMode ? "bg-neutral-darkblue" : "bg-neutral-white"
              }`}
            >
              <h2
                className={`${
                  selectMode ? "text-neutral-white" : "text-neutral-vdarkblue"
                } text-lg font-semibold `}
              >
                Where in the World?
              </h2>
              <div className="flex space-x-2 items-center">
                <button type="click" onClick={ handleMode}>
                  <FaMoon
                    className={`${
                      selectMode
                        ? "text-neutral-white"
                        : "text-neutral-vdarkblue"
                    } text-xs font-light `}
                  />
                </button>
                <p
                  className={` ${
                    selectMode ? "text-neutral-white" : "text-neutral-vdarkblue"
                  } text-sm font-light `}
                >
                  Dark Mode
                </p>
              </div>
            </header>

            <main className="w-full px-12 mt-8">
              <button
                type="click"
                onClick={() => setSelectedCountry(null)}
                className={`flex space-x-2 items-center ${
                  selectMode ? "bg-neutral-darkblue" : "bg-neutral-white"
                } py-1 px-4 w-24 ${
                  selectMode
                    ? "shadow-neutral-vdarkblue"
                    : "shadow-neutral-white"
                }  shadow-md cursor-pointer rounded-md`}
              >
                <FaArrowLeft
                  className={`${
                    selectMode ? "text-neutral-white" : "text-neutral-darkblue"
                  } text-sm font-medium`}
                />
                <p
                  className={`${
                    selectMode ? "text-neutral-white" : "text-neutral-darkblue"
                  } text-sm font-lmedium`}
                >
                  Back
                </p>
              </button>

              <section className="w-full mt-14 md:mb-0 sm:mb-10">
                <div className="flex md:flex-row sm:flex-col md:space-x-28 sm:space-y-8 md:items-start justify-start sm:items-start">
                  <div>
                    <img
                      className="w-96 h-80"
                      src={selectedCountry.flags.svg}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3
                      className={`${
                        selectMode
                          ? "text-neutral-white"
                          : "text-neutral-vdarkblue"
                      }  text-3xl font-bold mb-5`}
                    >
                      {selectedCountry.name}
                    </h3>
                    <div className="flex md:flex-row sm:flex-col md:space-x-16 sm:space-y-10 md:items-start mb-9">
                      <div className="flex flex-col space-y-1 ">
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Native Name:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.nativeName}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Population:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.population}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Region:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.region}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Sub Region:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.subregion || "N/A"}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Capital:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.capital || "N/A"}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-col space-y-1  ">
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Top Level Domain:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.topLevelDomain}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Currencies:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.currencies
                              .map((currency) => currency.name)
                              .join(",") || "N/A"}
                          </span>
                        </p>
                        <p
                          className={`selectdetail ${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-darkblue"
                          }`}
                        >
                          Languages:{" "}
                          <span
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            {selectedCountry.languages
                              .map((lang) => lang.name)
                              .join(",") || "N/A"}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex md:flex-row sm:flex-col md:space-x-5 sm:space-y-3 justify-center sm:items-start md:items-center">
                      <p
                        className={`selectdetail ${
                          selectMode
                            ? "text-neutral-white"
                            : "text-neutral-darkblue"
                        }`}
                      >
                        Border Countries:
                      </p>
                      <div className="flex space-x-3">
                        {selectedCountry.borders &&
                        selectedCountry.borders.length > 0 ? (
                          selectedCountry.borders.map((border, index) => (
                            <button
                              key={index}
                              className={`border-btn ${
                                selectMode
                                  ? "bg-neutral-darkblue"
                                  : "bg-neutral-white"
                              } ${
                                selectMode
                                  ? "text-neutral-vlightgray"
                                  : "text-neutral-darkgray"
                              }
                              ${selectMode ? "shadow-neutral-darkblue" : "shadow-neutral-white"}
                              `}
                              type="button"
                            >
                              {border}
                            </button>
                          ))
                        ) : (
                          <p
                            className={`selectdet ${
                              selectMode
                                ? "text-neutral-vlightgray"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            No Borders Available
                          </p>
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
        <div
          className={`${
            selectMode ? "bg-neutral-vdarkbluebg" : "bg-neutral-vlightgray"
          }  h-full w-full hide-scrollbar overflow-auto ${style.strollbar}`}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <header
              className={`md:px-12 sm:px-7 py-5 flex justify-between items-center w-full ${
                selectMode ? "bg-neutral-darkblue" : "bg-neutral-white"
              }`}
            >
              <h2
                className={`${
                  selectMode ? "text-neutral-white" : "text-neutral-vdarkblue"
                } text-lg font-semibold `}
              >
                Where in the World?
              </h2>
              <div className="flex space-x-2 items-center">
                <button type="click" onClick={handleMode}>
                  <FaMoon
                    className={`${
                      selectMode
                        ? "text-neutral-white"
                        : "text-neutral-vdarkblue"
                    } text-xs font-light `}
                  />
                </button>
                <p
                  className={` ${
                    selectMode ? "text-neutral-white" : "text-neutral-vdarkblue"
                  } text-sm font-light `}
                >
                  Dark Mode
                </p>
              </div>
            </header>

            <main className="w-full md:px-12 sm:px-7 mt-8">
              <div
                className={`${
                  selectMode ? "bg-neutral-darkblue" : "bg-neutral-white"
                } sm:w-full md:w-64 mb-7 py-3 px-4 flex space-x-3 items-center rounded-md shadow-sm ${selectMode ? "shadow-neutral-darkblue" : "shadow-neutral-vlightgray"}`}
              >
                <button type="button">
                  <FaSearch
                    className={`${
                      selectMode
                        ? "text-neutral-white"
                        : "text-neutral-darkgray"
                    } text-sm font-bold`}
                  />
                </button>
                <input
                  className={`inp  ${
                    selectMode
                      ? "text-neutral-vlightgray"
                      : "text-neutral-darkgray"
                  }
                  ${
                    selectMode
                      ? "placeholder:text-neutral-vlightgray"
                      : "placeholder:text-neutral-darkgray"
                  }`}
                  type="text"
                  placeholder="Search your country..."
                />
              </div>

              <section className="mb-8">
                <div className={`disp `}>
                  {country.map((count) => (
                    <div
                      key={count.name}
                      onClick={() => handleCountry(count)}
                      className={`countrydisp cursor-pointer ${
                        selectMode ? "bg-neutral-darkblue" : "bg-neutral-white"
                      }`}
                    >
                      <div>
                        <img
                          className="w-full rounded-t-md"
                          src={count.flags.svg}
                          alt=""
                        />
                      </div>
                      <div className="py-4 px-3">
                        <h3
                          className={`${
                            selectMode
                              ? "text-neutral-white"
                              : "text-neutral-vdarkblue"
                          } sm:text-sm md:text-base font-medium mb-3`}
                        >
                          {count.name}
                        </h3>
                        <div className="flex flex-col space-y-1">
                          <p
                            className={`detail ${
                              selectMode
                                ? "text-neutral-white"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            Population:{" "}
                            <span
                              className={`det ${
                                selectMode
                                  ? "text-neutral-vlightgray"
                                  : "text-neutral-darkblue"
                              }`}
                            >
                              {count.population}
                            </span>
                          </p>
                          <p
                            className={`detail ${
                              selectMode
                                ? "text-neutral-white"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            Region:{" "}
                            <span
                              className={`det ${
                                selectMode
                                  ? "text-neutral-vlightgray"
                                  : "text-neutral-darkblue"
                              }`}
                            >
                              {count.region}
                            </span>
                          </p>
                          <p
                            className={`detail ${
                              selectMode
                                ? "text-neutral-white"
                                : "text-neutral-darkgray"
                            }`}
                          >
                            Capital:{" "}
                            <span
                              className={`det ${
                                selectMode
                                  ? "text-neutral-vlightgray"
                                  : "text-neutral-darkblue"
                              }`}
                            >
                              {count.capital || "N/A"}
                            </span>
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
