import { UserData } from ".";

export const validateContactInfo = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.application_for) {
    errors.application_for = "This field is required.";
  }

  if (!userData.mode) {
    errors.mode = "Mode is required.";
  }

  if (!userData.category) {
    errors.category = "Category is required.";
  }

  if (!userData.fathers_name) {
    errors.fathers_name = "Father's name is required.";
  }

  if (!userData.mothers_name) {
    errors.mothers_name = "Mother's name is required.";
  }

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

  if (!userData.marital_status) {
    errors.marital_status = "Marital status is required.";
  }

  if (!userData.date_of_birth) {
    errors.date_of_birth = "This field is required.";
  }

  if (!userData.sex) {
    errors.sex = "This field is required.";
  }

  if (!userData.blood_group) {
    errors.blood_group = "Blood group is required.";
  }

  if (!userData.occupation) {
    errors.occupation = "Occupation is required.";
  }

  if (!userData.specific_marital_status && userData.marital_status === "Other") {
    errors.specific_marital_status = "Please specify your marital status.";
  }

  if (!userData.specific_sex && userData.sex === "Other") {
    errors.specific_sex = "Please specify your sex.";
  }

  return errors;
};

function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  

export const validateCredentials = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.identification_card) {
    errors.identification_card = "This field is required.";
  }

  if (userData.category !== "Education" && !userData.certificate_from_city_council) {
    errors.certificate_from_city_council = "This field is required.";
  }

  if (userData.category === "Education" && !userData.permission_letter) {
    errors.permission_letter = "This field is required.";
  }

  if (userData.category === "Education" && !userData.test_results) {
    errors.test_results = "This field is required.";
  }

  if ((userData.category === "Medical") && !userData.medical_report) {
    errors.medical_report = "This field is required.";
  }

  if ((userData.category === "Employment") && !userData.name_of_employment) {
    errors.name_of_employment = "This field is required.";
  }

  if (!userData.photo) {
    errors.photo = "This field is required.";
  }

  return errors;
};

export const validateDescription = (userData: UserData) => {
  const errors: Partial<Record<keyof UserData, string>> = {};

  if (!userData.live_description) {
    errors.live_description = "This field is required";
  }

  if (!userData.time_limit) {
    errors.time_limit = "This field is required.";
  }

  if (!userData.fixed_time && userData.time_limit === "Date") {
    errors.fixed_time = "Please specify a date.";
  }

  if (!userData.donation_needed) {
    errors.donation_needed = "This field is required.";
  }

  if (!userData.written_description) {
    errors.written_description = "This field is required.";
  }

  return errors;
};


