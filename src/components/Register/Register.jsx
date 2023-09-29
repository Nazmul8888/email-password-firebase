import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {

    const [registerError, setRegisterError]=useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword]= useState(false);


    const handelRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e. target.terms.checked
        console.log(email, password,accepted);

        // reset error
       setRegisterError('');
       setSuccess('');



    //    how to uppercase password create

       if(!/[A-Z]/.test(password)){
        setRegisterError('your password should be uppercase characters')

        return;
    }
    else if(! accepted){
        setRegisterError('please accept our terms & condition')
        return;
    }

        // create user
        createUserWithEmailAndPassword(auth,email,password)

        .then(result=>{
            console.log(result.user);
            setSuccess('Your account Successfully created');

            // How send verification email

            sendEmailVerification(result.user)
           .then(()=>{
            alert('please check your mail and verify your account ')
           })

        
        })
        .catch(error=>{
            console.log(error);
            setRegisterError(error.message);
        })
        
      
    }





    return (
        <div>
            
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl text-center mb-8">Please Register</h2>
            <form onSubmit={handelRegister} >
                <input className="mb-3 w-full bg-pink-700 py-2 px-4" type="email" name="email" placeholder="Email Address" id="required" />
                <br />


                <div className=" mb-3 relative border">
                <input className=" w-full bg-pink-700 py-2 px-4" 
                type={showPassword ? "text" : "password" } 
                name="password" 
                placeholder="Password" 
                id="required"  />
                <span className="absolute bottom-3 right-2" onClick={()=> setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
                </div>
                <br />
                <div className="mb-2">
                <input type="checkbox" name="terms" id="terms" />
                <label className="ml-2" htmlFor="terms">Accept our<a href="">Terms & Condition </a></label>
                </div>

               
               
                <br />
               
                <button className=" btn btn-secondary mb-3 w-full bg-pink-700"type="submit">Submit</button>


            </form>
            {
                setRegisterError && <p className="text-red-700">{registerError}</p>
            }

            {
                setSuccess && <p className="text-green-700">{success}</p>
            }

            <p className="label-text-alt link link-hover">Already have a account? Please Login <Link to='/login'>Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;