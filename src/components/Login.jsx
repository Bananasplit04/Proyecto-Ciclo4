import React, { Fragment } from "react";

function Login(){
    return(
        <Fragment>
            <div className="container">

                {/* Outer Row -->*/}
                <div class="row justify-content-center">

                    <div class="col-12">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Gestión de paquetes - Login</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Usuario/email."/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Contraseña"/>
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                                        <label class="custom-control-label" for="customCheck">Recordarme</label>
                                                    </div>
                                                </div>
                                                <a href="index.html" class="btn btn-primary btn-user btn-block">
                                                    Login
                                                </a>
                                                
                                                
                                            </form>
                                            <hr/>
                                            <div class="text-center">
                                                <a class="small" href="forgot-password.html">Olvidó su Contraseña</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="register.html">Registrarse</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                </div>

                {/* Bootstrap core JavaScript*/}
                <script src="assets/vendor/jquery/jquery.min.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                {/* Core plugin JavaScript*/}
                <script src="assets/vendor/jquery-easing/jquery.easing.min.js"></script>

                {/* Custom scripts for all pages*/}
                <script src="assets/js/sb-admin-2.min.js"></script>

        </Fragment>
    )
}

export default Login;