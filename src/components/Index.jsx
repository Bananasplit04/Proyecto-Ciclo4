import React, {Fragment} from 'react';
import Fragment from "react-bootstrap/Fragment";
function Index(){
    return( 
        <Fragment>
            <div className="container">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        // Nested Row within Card Body
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Gestión de paquetes - Registro</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Nombres"/>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Usuario"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email"/>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Contraseña"/>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repetir contraseña"/>
                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">
                                            Acepto términos y condiciones de uso
                                            </label>
                                        </div>
                                        <br/>
                                        <a href="login.html" class="btn btn-primary btn-user btn-block">
                                            Crear cuenta
                                        </a>
                                        
                                    </form>
                                    <hr/>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Olvido su contraseña</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="login.html">Ya tengo una cuenta, Ingresar!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                //Bootstrap core JavaScript
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                // Core plugin JavaScript
                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                //Custom scripts for all pages
                <script src="js/sb-admin-2.min.js"></script>
            </Fragment>
            
        );
  }


export default Index;