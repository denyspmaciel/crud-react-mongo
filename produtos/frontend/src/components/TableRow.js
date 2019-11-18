import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        //this.delete = this.delete.bind(this);
        this.confirmar = this.confirmar.bind(this);
    }
    /*delete() {
        axios.delete('http://localhost:3333/produtos/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }*/
    confirmar() {
      var conf = window.confirm('Deseja mesmo deletar este produto?');
      if (conf) {
        axios.delete('http://localhost:3333/produtos/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
      }
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nome}
          </td>
          <td>
            {this.props.obj.valor}
          </td>
          <td>
            {this.props.obj.codigo}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button onClick={this.confirmar} className="btn btn-danger">Deletar</button>
          </td>
        </tr>
    );
  }
}
//<button onClick={this.delete} className="btn btn-danger">Deletar</button>
export default TableRow;