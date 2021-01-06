import React from 'react'

function PanelAdd(props){
    return(
        <div>
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form>
                        <p>
                            <label>Titulo</label><br></br>
                            <input type="text" name="title" className="input"/>
                        </p>
                        <p>
                            <label>Nombre imagen</label><br></br>
                            <input type="text" name="image" className="input"/>
                        </p>
                        <p>
                            <label>Calificacion</label><br></br>
                            <select value ={props.rating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" value="Registrar Libro"/>
                        <button >Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default PanelAdd;