import { Button } from "../../../components/ui/button";

const Card = () => {

  return (
    <div className={`bg-primaryTheme text-secondaryTheme`}>
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
          <form className="justify-center w-full mx-auto" method="post">
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Cardholder Name
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your Cardholder Name"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Card Number
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your card number"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div className="mt-0 sm:mt-4 space-x-0 space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    Expiration Date
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Expiration Date"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 "
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-secondaryTheme"
                  >
                    CVV/CVC
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="CVV/CVC"
                    className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Button>Save</Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
