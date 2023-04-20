import React, {useState} from "react";
import {Formik, Form, Field} from 'formik';

function App () {

  const validateName = (value) =>{
    if(!value){
      return 'Required'
    }
    else if (/\d/.test(value)) {
      return 'Name should not contain numbers';
    } else if (value.length < 1) {
      return 'Name should be longer than 1 character';
    }
   }

   const validateLogin = (value) =>{
    if(!value){
      return 'Required'
    }
    else if (value.length < 5) {
      return 'login must contain more than 5 characters';
    }
   }

   const validateAge = (value) =>{
    if(!value){
      return 'Required'
    }
    else if (value <= 18) {
      return 'You must be over 18 years old';
    }
   }
  
    const validateEmail = (value) =>{
    if(!value){
      return 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      return 'Invalid email address'
    }
   }
  
//////////////////////////
return (
    <div className="wrapper">
      <Formik
      initialValues={{
        name: '',
        login: '',
        age: '',
        email: ''
        
      }}
      onSubmit={values => {console.log(values)}}
      >
        {({errors, touched}) => (
          <Form>
            <label>Name</label>
            <Field name="name" validate={validateName} className={errors.name && touched.name ? "invalid" : ""}/>
            {errors.name && touched.name && <p>{errors.name}</p>}

            <label>Login</label>
            <Field name="login" validate={validateLogin} className={errors.login && touched.login ? "invalid" : ""}/>
            {errors.login && touched.login && <p>{errors.login}</p>}

            <label>Age</label>
            <Field type="number" name="age" validate={validateAge} className={errors.age && touched.age ? "invalid" : ""}/>
            {errors.age && touched.age && <p>{errors.age}</p>}

            <label>Email</label>
            <Field name="email" validate={validateEmail} className={errors.email && touched.email ? "invalid" : ""}/>
            {errors.email && touched.email && <p>{errors.email}</p>}

            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
    </div>
);
} 
export default App;