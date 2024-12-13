import * as yup from "yup";
export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(8).matches({message:"Please create a stronger password"}).required("Required")
})