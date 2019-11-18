// modelo
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema ({
	nome: {
		type: String,
		required: true,
	},
	valor: {
		type: Number,
		required: true,
	},
	codigo: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	}
});
	
mongoose.model('Produto', ProdutoSchema);