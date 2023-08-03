import { UserData } from "./WithdrawDonations";

export const validateFields = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.amount) {
    errors.amount = "This field is required";
  }
  if (!userData.account_number) {
    errors.account_number = "This field is required";
  }
  if (!userData.bank_name) {
    errors.bank_name = "This field is required";
  }

  return errors;
};




