import React from "react";
import { Container } from 'react-bootstrap';
import {  useFormik } from "formik";
import { formSchema } from "./schemas";
import './Formikform.css';


function Formikform() {
                const initialValues = {
                    name: "",
                    email: "",
                    contact_no:"",
                  };
           
                  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
                    useFormik({
                      initialValues,
                      validationSchema: formSchema,
                      onSubmit: (values, action) => {
                        console.log(
                          values
                        );
                        action.resetForm();
                      },
                    });
                    console.log(
                      errors
                    );
         
    return(
        <>
          <Container >

            <h2>FORMIK & YUP VALIDATION FORM</h2>
             <form onSubmit={handleSubmit}>
                <div>
                   <div className="all">
                    
                          <div className="main">
                               <label htmlFor="name" className="input-label" >Name</label> 
                              <input type="name" autoComplete="off" name="name" id="name" placeholder="Enter The Name" value={values.name} onChange={handleChange} onBlur={handleBlur}/> 
                               
                          </div>
                          {errors.name && touched.name ? (
                                  <p className="form-error">{errors.name}</p>
                                ) : null}

                          <div className="main">
                                <label htmlFor="email" className="input-label">Email</label>
                                <input type="email" autoComplete="off" name="email" id="email" placeholder="Enter The Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                               
                          </div>
                          {errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                                ) : null}

                          <div className="main">
                             <label htmlFor="contact_no" className="input-label" >Contact No</label>
                              <input type="integer" autoComplete="off" name="contact_no" id="contact_no" placeholder="Enter the Contact_No" value={values.contact_no} onChange={handleChange} onBlur={handleBlur}/>
                               
                          </div>
                          {errors.contact_no && touched.contact_no ? (
                                <p className="form-error">{errors.contact_no}</p>
                                ) : null}

                          <div className="buttons">
                            <button className="input-button" type="submit">
                            Submit
                            </button>
                          </div>
                      
                   </div>
               </div>
             </form>
          </Container>

        </>
    )
}
 
export default Formikform;
  
                 

 