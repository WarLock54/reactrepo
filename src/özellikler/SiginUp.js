import React from "react";
import ReactDOM from 'react-dom';
import { useFormik} from 'formik';
import validationSchema  from "./Validation";

function SiginUp(){
    const {formik, values, handleSubmit, handleChange,handleBlur, errors,touched} = useFormik({
        initialValues: {
            email: '',   
            password:"",
            passwordConfirm:"",
        },
        onSubmit: values => {
          console.log(values);
        },
  validationSchema,

        })
      
    console.log(errors);
return (
    
        
   <div className='App'>

<form onSubmit={handleSubmit}>
 <label htmlFor="email">Email</label>
        <input type="email" name="email"  value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && touched.email && (<div className="hatarapor">{errors.email}</div>)}
        <br/>
        <br />
        <label htmlFor="password">Şifre</label>
        <input type="password" name="password"  value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {errors.password && touched.password && (<div className="hatarapor">{errors.password}</div>)}
        <br/>
        <br />
        <label htmlFor="passwordConfirm">ŞifreDOğrulama</label>
        <input type="password" name="passwordConfirm"  value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />
        {errors.passwordConfirm && touched.passwordConfirm && (<div className="hatarapor">{errors.passwordConfirm}</div>)}
        <br/>
        <br />

<button type="submit">Submit</button>
        <br>
        </br>
        <br>
        </br>
        <code>  {JSON.stringify(values)}   </code>
      </form>
    </div>
);
}

export default SiginUp;