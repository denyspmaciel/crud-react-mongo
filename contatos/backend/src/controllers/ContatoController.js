const mongoose = require('mongoose');

const Contatos = mongoose.model('Contato');

module.exports = {

	async index(req, res) {
		const contatos = await Contatos.find();

		return res.json(contatos);
	},

	async show(req, res) {
		const contato = await Contatos.findById(req.params.id);

		return res.json(contato);
	},

	async store(req, res) {
		const contato = await Contatos.create(req.body);

		return res.json(contato);
	},

	async update(req, res) {
		const contato = await Contatos.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(contato);
	},

	async destroy(req, res) {
		const contato = await Contatos.findByIdAndRemove(req.params.id);

		return res.json({'status': 'destroyed'});
	}

};
