import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .max(12, "Name must be under 10 characters")
    .required("Name is required"),
  size: yup
    .string()
    .required("size is required"),
  sauce: yup
    .string()
    .required("sauce is required"),
  specialOrder: yup
    .string()
})
 
export default formSchema