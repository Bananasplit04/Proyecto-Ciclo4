import React, {Fragment} from 'react';
import Register from './components/Register';
function Index(){
    return( 
        <Fragment>
            <div className="container">

                <Register/>

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
                <script src="../../public/estilos/js/vendor/jquery/jquery.min.js"></script>
                <script src="../../public/estilos/js/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                // Core plugin JavaScript
                <script src="../../public/estilos/js/vendor/jquery-easing/jquery.easing.min.js"></script>

                //Custom scripts for all pages
                <script src="../../public/estilos/js/sb-admin-2.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </Fragment>
            
        );
  }


export default Index;