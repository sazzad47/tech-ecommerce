import profilePhoto from "../../images/profile-photo.png";

const TopContributors = () => {
  return (
    <div className="text-secondaryTheme bg-black-gradient-2 rounded-lg">
      <div className="w-full max-w-md p-5 shadow">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none">
            Top Contributors
          </h5>
        </div>
        <div className="flow-root">
          <ul
            className="divide-y divide-gray-600 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profilePhoto}
                    alt="Neil"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  $320
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profilePhoto}
                    alt="Bonnie"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  $3467
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profilePhoto}
                    alt="Michael"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  $67
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profilePhoto}
                    alt="Lana"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  $367
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profilePhoto}
                    alt="Thomas"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
