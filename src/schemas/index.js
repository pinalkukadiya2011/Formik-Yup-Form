import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email('Invalid email address').required("Please enter your Email"),
  contact_no: Yup.string().matches(/^[0-9]+$/, 'Must be a valid phone number').min(10).max(10).required('Contact No is required'),
  });