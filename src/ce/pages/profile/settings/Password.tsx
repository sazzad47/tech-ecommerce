import { Button } from "../../../components/ui/button";

const Password = () => {

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
                  Current Password
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your current password"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  New Password
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your new password"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-secondaryTheme"
                >
                  Confirm New Password
                </label>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Enter your new password again"
                  className="bg-black-gradient-2 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
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

export default Password;
