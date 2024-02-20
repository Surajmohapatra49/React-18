import React from 'react'
import { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Register = () => {
    let ShowNotification = () => {
        NotificationManager.error('Error message')
      }
      
  return (
    <div>
       <div className="container-fluid" >
            <h2>  Register User</h2>
            <Formik

              initialValues={{ FirstName:'' ,LastName: '' ,Phone: '' , email: '' , age: '' ,password: '' }}

              validationSchema={yup.object({
                  FirstName: yup.string().required(' First Name Required').min(4,'Name too Short'),
                  LastName: yup.string().required(' Last Name Required').min(4,'Name too Short'),
                  Phone: yup.string().required('Phone number required').matches(/\+91\d{10}/,'Invalid Mobile'),
                  email : yup.string().required('email id required'),
                  age : yup.number().required('Age  required') .min(18 , 'min 18 required') .max(48 , 'max 48 required'),
                  password:yup.string().required('Password required').matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, 'Invalid password')

              })}

              onSubmit={(values)=>{alert(JSON.stringify(values))}}
            >

                <Form>
                    <dl>
                        <dt className="bi bi-person-fill"> First Name</dt>
                        <dd> <Field type="text" name="FirstName" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="FirstName" /> </dd>

                        <dt className="bi bi-person-fill"> Last Name</dt>
                         <dd> <Field type="text" name="LastName" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="LastName" /> </dd>

                        <dt className="bi bi-telephone-fill"> Mobile</dt>
                        <dd> <Field type="text" name="Phone" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="Phone" /> </dd>

                        <dt className="bi bi-envelope-fill"> Email</dt>
                        <dd><Field type="email" name="email"/></dd>
                        <dd className="text-danger"> <ErrorMessage name="email"/> </dd>

                        
                        <dt> Age</dt>
                         <dd> <Field type="text" name="age" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="age" /> </dd>

                         
                        <dt>Password</dt>
                         <dd> <Field type="text" name="password" /> </dd>
                        <dd className="text-danger"> <ErrorMessage name="password" /> </dd>

                    </dl> 
                    <NotificationContainer/>

                   
                    <button onClick={ShowNotification} className="btn btn-primary">Register</button>
                </Form>

            </Formik>
        </div>
    </div>
  )
}

export default Register
