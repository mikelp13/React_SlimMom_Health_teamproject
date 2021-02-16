// import React from 'react';
// import * as yup from 'yup';
// import { Formik } from 'formik';

// const Basic = () => {
//     const errorMessagesSchema = yup.object().shape({
//         username: yup
//             .string()
//             .min(2, 'Минимум 2 символа!')
//             .max(50, 'Слишком длинный!')
//             .required('Обязательно'),
//         email: yup
//             .string()
//             .min(3, 'Минимум 3 символа!')
//             .max(50, 'Слишком длинный!')
//             .required('Обязательно'),
//         password: yup
//             .string()
//             .min(8, 'Минимум 8 символов!')
//             .max(50, 'Слишком длинный!')
//             .required('Обязательно'),
//     });
//     return (
//         <div>
//             <h1>Регистрация</h1>
//             <Formik
//                 initialValues={{ username: '', email: '', password: '' }}
//                 validationSchema={errorMessagesSchema}
//                 // validate={values => {
//                 //     const errors = {};
//                 //     if (!values.email) {
//                 //         errors.email = 'Required';
//                 //     } else if (
//                 //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//                 //             values.email,
//                 //         )
//                 //     ) {
//                 //         errors.email = 'Invalid email address';
//                 //     }

//                 //     if (!values.password) {
//                 //         errors.password = 'Required';
//                 //     }
//                 //     console.log(errors);
//                 //     return errors;
//                 // }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                     console.log(values);
//                 }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                     /* and other goodies */
//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="email"
//                             name="email"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.email}
//                         />
//                         {errors.email && touched.email && errors.email}
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.password}
//                         />
//                         {errors.password && touched.password && errors.password}
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default Basic;
