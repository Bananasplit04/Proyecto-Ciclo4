import { Component } from "react";
export function indexApp() {
    return(
    <div className= "indexApp">
        <head>
        
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
        
        
            
            <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet"/>
        
            
            <link href="css/sb-admin-2.min.css" rel="stylesheet"/>
        
            <title>Insta Ya!</title>
        
            
            <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet"/>
        
        </head>
        
        <body id="page-top">
        
            -- Page Wrapper --
            <div id="wrapper">
        
                -- Sidebar --
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
                    -- Sidebar - Brand --
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-truck"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">Insta Ya! </div>
                    </a>
        
                    !-- Divider --
                    <hr class="sidebar-divider my-0"/>
                    -- Nav Item - Dashboard --
                
                    -- Nav Item - Tables --
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Gestión de paquetes </span></a>
                    </li>
        
                    -- Divider --
                    <hr class="sidebar-divider my-0"/>
                    - Nav Item - Pages Collapse Menu -
                    <li class="nav-item active">
                        <a class="nav-link" href="login.html">
                            <i class="fas fa-fw fa-sign-out-alt"></i>
                            <span>Salir </span></a>
                    </li>
                    -- Divider --
                    <hr class="sidebar-divider my-0"/>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i class="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Login Screens:</h6>
                                <a class="collapse-item" href="login.html">Login</a>
                                <a class="collapse-item" href="register.html">Register</a>
                                <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                                <div class="collapse-divider"></div>
                            </div>
                        </div>
                    </li>
        
                
        
                    
                    <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
        
                </ul>
                
                <div id="content-wrapper" class="d-flex flex-column">
        
                    
                    <div id="content">
        
                        
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        
                            
                            <form class="form-inline">
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>
                            </form>
        
                            
                            <form
                                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small" placeholder="Buscar orden..."
                                        aria-label="Search" aria-describedby="basic-addon2"/>
                                    <div class="input-group-append"/>
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                <div/>
                            </form>
        
                            
                            <ul class="navbar-nav ml-auto">
        
                                
                                <li class="nav-item dropdown no-arrow d-sm-none">
                                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-search fa-fw"></i>
                                    </a>
                                    
                                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form class="form-inline mr-auto w-100 navbar-search">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0 small"
                                                    placeholder="Buscar orden..." aria-label="Search"
                                                    aria-describedby="basic-addon2"/>
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
        
                                
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-bell fa-fw"></i>
                                        
                                        <span class="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    
                                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 class="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-primary">
                                                    <i class="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 12, 2019</div>
                                                <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-success">
                                                    <i class="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="mr-3">
                                                <div class="icon-circle bg-warning">
                                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a> 
                                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>
        
                                
                                <li class="nav-item dropdown no-arrow mx-1">
                                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-envelope fa-fw"></i>
                                        
                                        <span class="badge badge-danger badge-counter">7</span>
                                    </a>
                                    
                                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 class="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..."/>
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div class="font-weight-bold">
                                                <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..."/>
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div class="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                                    alt="..."/>
                                                <div class="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image mr-3">
                                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..."/>
                                                <div class="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>
        
                                <div class="topbar-divider d-none d-sm-block"></div>
        
                                
                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Homero Tompson</span>
                                        <img class="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"/>
                                    </a>
                                    
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
        
                            </ul>
        
                        </nav>
                        
        
                        
                        <div class="container-fluid">
        
                            
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Gestión de paquetes</h1>
                            
        
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalCrear" data-whatever="@mdo">Crear orden</button>
                            </div>
                            
        
                            
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Listado de ordenes</h6>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Abrir orden</th>
                                                    <th>Número de orden</th>
                                                    <th>ciudad de entrega</th>
                                                    <th>Dirección de entrega</th>
                                                    <th>Fecha</th>
                                                    <th>Estado de la orden</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Abrir orden</th>
                                                    <th>Número de orden</th>
                                                    <th>ciudad de entrega</th>
                                                    <th>Dirección de entrega</th>
                                                    <th>Fecha</th>
                                                    <th>Estado de la orden</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516651</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516652</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-warning text-white ">Cancelado</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516653</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-success text-white ">Cumplido</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516654</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516655</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516656</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516657</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516658</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516659</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                <tr>
                                                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalMod" data-whatever="@mdo">Ver orden</button></td>
                                                    <td>12131516650</td>
                                                    <td>Bogotá</td>
                                                    <td>Cra 16 ·11 - 05 </td>
                                                    <td>11/10/2023</td>
                                                    <td class="p-2 bg-primary text-white ">Guardada</td>
                                            
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                        
        
                    </div>
                    
        
                    
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Insta Ya! 2022</span>
                            </div>
                        </div>
                    </footer>
                    
        
                </div>
                
        
            </div>
            
        
            
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fas fa-angle-up"></i>
            </a>
        
        
        
            
            <div class="modal fade bd-example-modal-lg" id="ModalCrear" tabindex="-1" role="dialog" aria-labelledby="ModalCrearLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="ModalCrearLabel">Gestión de Paquetes - Modificación Orden</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form role="form">
                        <div class="well">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group row">
                                        <label for="nombre" class="col-form-label col-sm-4">Fecha:</label>
                                        <div class="col-sm-8">
                                    <input type="date" name="nombre" id="nombre" class="form-control" placeholder="Nombre" tabindex="1"/>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group row">
                                        <label for="apellido" class="col-form-label col-sm-4">Hora</label>
                                        <div class="col-sm-8">
                                        <input type="time" name="hora" id="hora" class="form-control" placeholder="00:00" tabindex="2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="row">
                    
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Alto (Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="alto" id="alto" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Largo(Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="ancho" id="ancho" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Fondo (Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="fondo" id="fondo" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Peso (Kg)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="peso" id="peso" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Dirección de recogida:</label>
                                <div class="col-sm-8">
                                <input type="text" name="DdRecogida" id="DdRecogida" class="form-control" placeholder="Dirección de recogida:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Ciudad de recogida:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cRecogida" id="cRecogida" class="form-control" placeholder="Ciudad de recogida:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Nombre del destinatario:</label>
                                <div class="col-sm-8">
                                <input type="text" name="nDestinatario" id="nDestinatario" class="form-control" placeholder="Nombre del destinatario:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Cedula/ Nit del destinatario:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cedula" id="cedula" class="form-control" placeholder="Cedula/ Nit del destinatario:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Dirección de entrega:</label>
                                <div class="col-sm-8">
                                <input type="text" name="dEntrega" id="dEntrega" class="form-control" placeholder="Dirección de entrega" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Ciudad de entrega:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cEntrega" id="cEntrega" class="form-control" placeholder="Ciudad de entrega:" tabindex="6"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Actualizar</button>
                    </div>
                </div>
                </div>
            </div>
        
            
            
            <div class="modal fade bd-example-modal-lg" id="ModalMod" tabindex="-1" role="dialog" aria-labelledby="ModalModLabel" aria-hidden="false">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="ModalModLabel">Gestión de Paquetes - Modificación Orden</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form role="form">
                        <div class="well">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group row">
                                        <label for="nombre" class="col-form-label col-sm-4">Fecha:</label>
                                        <div class="col-sm-8">
                                    <input type="date" name="nombre" id="nombre" class="form-control" placeholder="Nombre" tabindex="1"/>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <div class="form-group row">
                                        <label for="apellido" class="col-form-label col-sm-4">Hora</label>
                                        <div class="col-sm-8">
                                        <input type="time" name="hora" id="hora" class="form-control" placeholder="00:00" tabindex="2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="row">
                    
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Alto (Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="alto" id="alto" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Largo(Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="ancho" id="ancho" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Fondo (Cms)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="fondo" id="fondo" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="form-group row">
                                        <label for="number" class="col-form-label col-sm-7">Peso (Kg)</label>
                                        <div class="col-sm-4"> 
                                        <input type="input" name="peso" id="peso" class="form-control" placeholder="1" tabindex="4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Estado de la orden:</label>
                            <div class="col-sm-8">
                                <select name="EstadoOrden" id="EstadoOrden" class="form-select form-control">
        
                                    <option value="1">Guardada</option>
                                    <option value="2">Cumplido</option>
                                    <option value="2">Cancelado</option>
                                
                                </select> 
                            </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Dirección de recogida:</label>
                                <div class="col-sm-8">
                                <input type="text" name="DdRecogida" id="DdRecogida" class="form-control" placeholder="Dirección de recogida:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Ciudad de recogida:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cRecogida" id="cRecogida" class="form-control" placeholder="Ciudad de recogida:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Nombre del destinatario:</label>
                                <div class="col-sm-8">
                                <input type="text" name="nDestinatario" id="nDestinatario" class="form-control" placeholder="Nombre del destinatario:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Cedula/ Nit del destinatario:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cedula" id="cedula" class="form-control" placeholder="Cedula/ Nit del destinatario:" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Dirección de entrega:</label>
                                <div class="col-sm-8">
                                <input type="text" name="dEntrega" id="dEntrega" class="form-control" placeholder="Dirección de entrega" tabindex="6"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contraseña" class="col-form-label col-sm-4">Ciudad de entrega:</label>
                                <div class="col-sm-8">
                                <input type="text" name="cEntrega" id="cEntrega" class="form-control" placeholder="Ciudad de entrega:" tabindex="6"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
                </div>
            </div>
        
            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">¿Quieres cerrar sesion?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a class="btn btn-primary" href="login.html">Salir</a>
                        </div>
                    </div>
                </div>
            </div>
        
            
            
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        
            
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        
            
            <script src="js/sb-admin-2.min.js"></script>
        
            
            <script src="vendor/datatables/jquery.dataTables.min.js"></script>
            <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
        
            
            <script src="js/demo/datatables-demo.js"></script>
            
        </body>

        </div>
        
    );
}
