import Wave from "src/it/components/wave";
import { Typography } from "@mui/material";

const Security = () => {
  return (
    <div className="flex flex-col relative pb-[5rem]">
      <Wave />
      <div className="w-full px-[1rem] md:px-[5rem] flex flex-col gap-5 items-center">
        <div className="w-full text-center text-gray-900 my-[3rem]">
          <div className="eleven">
            <h1>User Security Responsibilities</h1>
          </div>
          <Typography className="mt-10">
            While developers and organizations play a crucial role in ensuring
            the security of websites and web applications, users also have
            significant responsibilities when it comes to protecting their own
            data and maintaining a secure online environment. Being aware of
            potential risks and following best practices can help users protect
            their information and reduce the likelihood of falling victim to
            cyber threats.
          </Typography>
        </div>

        <p className="font-bold text-2xl text-900">
          Key user security responsibilities include:
        </p>
        <ul>
          <li>
            <strong>Strong Passwords:</strong> Using strong and unique passwords
            for each online account is essential. Avoid using common passwords
            and consider using a password manager to keep track of complex
            passwords securely.
          </li>
          <li>
            <strong>Two-Factor Authentication (2FA):</strong> Enabling 2FA
            whenever possible adds an extra layer of security to user accounts.
            2FA requires an additional verification step, such as a one-time
            code sent to a mobile device, after entering the password.
          </li>
          <li>
            <strong>Safe Browsing:</strong> Being cautious while browsing the
            internet can prevent users from clicking on malicious links or
            visiting unsafe websites that may attempt to steal personal
            information or distribute malware.
          </li>
          <li>
            <strong>Regular Updates:</strong> Keeping devices and software
            up-to-date with the latest security patches ensures that known
            vulnerabilities are fixed, reducing the risk of exploitation.
          </li>
          <li>
            <strong>Securing Personal Information:</strong> Being mindful of
            what personal information is shared online can prevent identity
            theft and protect against social engineering attacks.
          </li>
          <li>
            <strong>Public Wi-Fi Usage:</strong> Avoiding sensitive transactions
            or accessing personal accounts while connected to public Wi-Fi
            networks helps prevent unauthorized access to user data.
          </li>
          <li>
            <strong>Phishing Awareness:</strong> Recognizing phishing attempts
            and avoiding clicking on suspicious links or providing sensitive
            information to unknown sources is crucial for protecting against
            phishing attacks.
          </li>
          <li>
            <strong>Logout and Lock Devices:</strong> Logging out of accounts
            after use and locking devices when not in use prevents unauthorized
            access to personal data.
          </li>
          <li>
            <strong>Regular Backups:</strong> Regularly backing up important
            data ensures that it can be recovered in case of a security incident
            or device failure.
          </li>
          <li>
            <strong>Privacy Settings:</strong> Adjusting privacy settings on
            social media and other online accounts helps control what
            information is shared with others.
          </li>
        </ul>
        <p>
          By taking these user security responsibilities seriously and
          practicing good cybersecurity habits, users can play a significant
          role in safeguarding their own digital presence and contributing to a
          more secure online environment overall.
        </p>
      </div>
    </div>
  );
};

export default Security;
