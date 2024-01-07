import Header from "../../components/Header/Header";
import "./user.scss"

const Register = () => {
   return (
      <>
         <Header />

         <div className="usrCrPg mycollectionSec">
            <div className="container">
               <h3 class="collectionSecHeading text-center">Register</h3>


               <div className="row mt-3 justify-content-center">
                  <div className="col-lg-8 col-xl-6">

                     <div className="createCollectionCard p-lg-4">
                        <form className="w-100">
                           <div className="form-group">
                              <div class="d-flex align-items-center flex-wrap">
                                 <span class="formLabel">User Name</span>
                              </div>
                              <input type="text" placeholder="Enter Name" class="form-control" />
                           </div>

                           <div className="form-group">
                              <div class="d-flex align-items-center flex-wrap">
                                 <span class="formLabel">Email ID</span>
                              </div>
                              <input type="email" placeholder="Enter Email Id" class="form-control" />
                           </div>

                           <div className="form-group">
                              <div class="d-flex align-items-center flex-wrap">
                                 <span class="formLabel">Password</span>
                              </div>
                              <input type="password" placeholder="Enter Password" class="form-control" />
                           </div>

                           <div className="form-group">
                              <div class="d-flex align-items-center flex-wrap">
                                 <span class="formLabel">Confirm Password</span>
                              </div>
                              <input type="password" placeholder="Enter Confirm Password" class="form-control" />
                           </div>

                           <div className="form-group pt-3 mb-0">
                              <button class="btn gradientBtn mx-auto">Register</button>
                           </div>

                        </form>
                     </div>

                  </div>
               </div>



            </div>
         </div>
      </>
   )
}
export default Register;