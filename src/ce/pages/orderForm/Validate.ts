import { UserData } from ".";

export const validateContactInfo = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.first_name) {
    errors.first_name = "First name is required.";
  }

  if (!userData.last_name) {
    errors.last_name = "Last name is required.";
  }

  if (!userData.email) {
    errors.email = "Email is required.";
  }

  if (!userData.phone) {
    errors.phone = "Phone is required.";
  }

  if (!validateEmail(userData.email)) {
    errors.email = "Invalid email.";
  }

  if (userData.phone && !/^\d{10}$/.test(userData.phone)) {
    errors.phone = "Invalid phone number.";
  }

  if (!userData.country) {
    errors.country = "Country is required.";
  }

  if (!userData.province) {
    errors.province = "Province is required.";
  }

  if (!userData.city) {
    errors.city = "City is required.";
  }

  if (!userData.zip) {
    errors.zip = "ZIP code is required.";
  }

  if (!userData.address) {
    errors.address = "Address is required.";
  }

  return errors;
};

function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  


export const validateProjectDetails = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.title) {
    errors.title = "Title is required.";
  }

  if (!userData.category) {
    errors.category = "Category is required.";
  }

  if (!userData.order_file) {
    errors.order_file = "Order file is required.";
  }

  if (!userData.delivery_date) {
    errors.delivery_date = "Delivery date is required.";
  }

  // Validate title length
  if (userData.title && userData.title.length > 50) {
    errors.title = "Title must be less than 50 characters.";
  }


  return errors;
};


