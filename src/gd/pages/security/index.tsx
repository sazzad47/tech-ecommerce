import styles from "../../style";

const Security = () => {
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="">
        <h1 className={`flex items-center justify-center ${styles.heading2}`}>
          User Security Responsibilities
        </h1>
      </div>
      <div className="py-5 md:py-7 flex flex-col gap-5">
        <p>
          There are certain responsibilities which users must be aware of,
          understand, and follow. Users must keep passwords private, report
          changes in their user status, report suspected security violations,
          and more.
        </p>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-2xl">Passwords</h4>
          <p>
            Passwords should be memorized and should not be written down on any
            medium. If a password is obtained by another user, this can
            compromise the security of information on the system.
          </p>
          <p>
            The most obvious threat to password security is the compromise of
            passwords. The simplest way to protect an account from an
            unauthorized attack by a user who may have discovered a password is
            to periodically change the password. Passwords should be changed
            frequently enough to reduce the probability of compromise during the
            lifetime of the individual password. The longer any single password
            is used, the more opportunities there are for compromise.
          </p>
          <p>
            If users are allowed to select their own passwords, the new password
            must be at least six characters long and must contain at least two
            alphabetic characters and one numeric character. The password should
            not reflect any personal or professional aspect of the user (for
            example, friends, user's name, pet's name, or job title) and should
            not be a common word that might be found in a dictionary.
            Password-guessing schemes often scan one or more dictionaries and a
            substantial list of personal items, such as the user's name, the
            names of children or pets, and birthdays.
          </p>
          <p>
            Passwords can have a finite lifetime, determined by the ISSO. If a
            password has expired and the user attempts to log in, the user is
            notified that the password must be changed and the user is allowed
            to log in unless the password is changed. It is recommended that
            user passwords be changed more frequently than the specified
            password lifetime. If there is any suspicion that a user's password
            has been compromised, the password should be changed immediately.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-2xl">Leaving your system unattended</h4>
          <p>
            You should never leave a system unattended while any user is logged
            into an active session. If you must be away from the machine for
            even a short period of time, it is strongly recommended that you log
            off the system before leaving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
