import React from 'react'
import './searchbar.css'

export default class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            busqueda: "" //la busqueda a realizar, si esta vacia no hemos buscado nada
        }
    }

    render()
    {
        return (
            <div className="search-bar">
                <input className="search-input"
                placeholder="¿Que deseas buscar?"
                name="search"
                onChange={ (event) => this.setState({busqueda:event.target.value}) }
                />

                <button className="search-button" type="button" onClick={ ()=>{ this.props.emitSearch(this.state.busqueda) } }>Buscar</button>
            </div>
        );
    }

}