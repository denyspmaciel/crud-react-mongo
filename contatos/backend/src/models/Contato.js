// modelo
const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema ({
	nome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	}
});

mongoose.model('Contato', ContatoSchema);