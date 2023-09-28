import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Register = () => {


    const handelRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create user
        createUserWithEmailAndPassword(auth,email,password)

        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
        
      
    }





    return (
        <div>
            
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl text-center mb-8">Please Register</h2>
            <form onSubmit={handelRegister} >
                <input className="mb-3 w-3/4 bg-pink-700 py-2 px-4" type="email" name="email" placeholder="Email Address" />
                <br />
                <input className="mb-3 w-3/4 bg-pink-700 py-2 px-4" type="password" name="password" placeholder="Password"  />
                <br />
               
                <button className=" btn btn-secondary mb-3 w-3/4 bg-pink-700"type="submit">Submit</button>


            </form>
            </div>
        </div>
    );
};

export default Register;