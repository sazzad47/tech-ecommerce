import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

const AmountDetails = () => {
  return (
    <div className={`bg-primaryTheme text-secondaryTheme`}>
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
          <form className="justify-center w-full mx-auto" method="post">
            <div className="">
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Amount
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your donation amount"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Frequency
                </label>
                <RadioGroup defaultValue="Once">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="bg-secondaryTheme" value="Once" id="Once" />
                    <label htmlFor="Once">Once</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="bg-secondaryTheme" value="Monthly" id="Monthly" />
                    <label htmlFor="Monthly">Monthly</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem className="bg-secondaryTheme" value="Yearly" id="Yearly" />
                    <label htmlFor="Yearly">Yearly</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="relative pt-3 xl:pt-6">
              <label
                htmlFor="note"
                className="block mb-3 text-sm font-semibold text-secondaryTheme"
              >
                {" "}
                Notes (Optional)
              </label>
              <textarea
                name="note"
                className="flex items-center bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                rows={4}
                placeholder="Notes for delivery"
              ></textarea>
            </div>
            <div className="flex items-center mt-4">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions.
                    </label>
                  </div>
                </div>
              </div>
            <div className="mt-4">
              <Button className="w-full">Process</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AmountDetails;
