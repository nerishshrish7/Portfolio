import { useFormik } from 'formik';
import React from 'react'
import { basicSchema } from '../Api/Yup';

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
    },
    validateSchema: basicSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.age}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Formik

