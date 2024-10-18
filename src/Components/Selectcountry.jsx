import { FaArrowLeft, FaMoon } from "react-icons/fa";
import PropTypes from 'prop-types'

export const Selectedcountry = ({
    onClickBack,
}) => {
  return (
    <div className="bg-neutral-vdarkbluebg h-screen w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <header className="px-12 py-5 flex justify-between items-center w-full bg-neutral-darkblue">
          <h2 className="text-neutral-white text-lg font-semibold ">
            Where in the World?
          </h2>
          <div className="flex space-x-2 items-center">
            <FaMoon className="text-neutral-white text-xs font-light " />
            <p className="text-neutral-white text-sm font-light ">Dark Mode</p>
          </div>
        </header>

        <main className="w-full px-12 mt-8">
            <button type="click" onClick={onClickBack} className="flex space-x-2 items-center bg-neutral-darkblue py-1 px-4 w-24 shadow-neutral-vdarkblue shadow-md cursor-pointer rounded-md">
                <FaArrowLeft className="text-neutral-white text-sm font-medium" />
                <p className="text-neutral-vlightgray text-sm font-light">Back</p>
            </button>


            <section className="w-full">

            </section>

        </main>
      </div>
    </div>
  );
};

Selectedcountry.propTypes = {
    onClickBack: PropTypes.func.isRequired,
}