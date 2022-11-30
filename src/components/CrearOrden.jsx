import React, { Fragment } from "react";
function CrearOrden (){
    return(
            <Fragment>
                {/* Crear orden Modal- */}
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
                            <div class="well"/>
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
                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Actualizar</button>
                        </div>
                    </div>
                    </div>
                </div>*
            </Fragment>

    );
}

export default CrearOrden;