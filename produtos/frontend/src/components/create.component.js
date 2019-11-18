import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.onChangeCodigo = this.onChangeCodigo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      valor: '',
      codigo: ''
    }
  }
  onChangeName(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeValor(e) {
    this.setState({
      valor: e.target.value
    })  
  }
  onChangeCodigo(e) {
    this.setState({
      codigo: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      valor: this.state.valor,
      codigo: this.state.codigo
    };
    axios.post('http://localhost:3333/produtos', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nome: '',
      valor: '',
      codigo: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Novo Produto</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeName}
                      />
                </div>

                <div className="form-group">
                    <label>Valor: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.valor}
                      onChange={this.onChangeValor}
                      />
                </div>

                <div className="form-group">
                    <label>Código: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.codigo}
                      onChange={this.onChangeCodigo}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Produto " 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}