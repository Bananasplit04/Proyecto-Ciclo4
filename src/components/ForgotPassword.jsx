import React, { Fragment }  from 'react';
import Fragment from "react-bootstrap/Fragment";

function ForgotPassword(){
    return( 
        <Fragment>
            <div className="container">
                

            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-2">¿Olvidó su contraseña?</h1>
                                            <p class="mb-4">Estas cosas pasan! no te preocupes! ingresa tu email y te enviaremos un nuevo password a tu correo</p>
                                        </div>
                                        <form class="user">
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Ingreasa tu Email..."/>
                                            </div>
                                            <a href="login.html" class="btn btn-primary btn-user btn-block">
                                                Cambiar contraseña
                                            </a>
                                        </form>
                                        <hr/>
                                        <div class="text-center">
                                            <a class="small" href="register.html">Crear una Cuenta</a>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="login.html">Ya tengo una cuenta, Login!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            </div>


            <script src="assets/vendor/jquery/jquery.min.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


            <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>


            <script src="assets/js/sb-admin-2.min.js"></script>
        </Fragment>
    )
}
export default ForgotPassword;