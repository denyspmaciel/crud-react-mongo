const mongoose = require('mongoose');
//const model_produtos = require('../models/produtos');

const Produtos = mongoose.model('Produto');

//var controller = {};

module.exports = {

	async index(req, res) {
		const produtos = await Produtos.find();

		return res.json(produtos);
	},
	
	async show (req, res) {
		const produto = await Produtos.findById(req.params.id);

		return res.json(produto);
	},

	async store(req, res) {
		const produto = await Produtos.create(req.body);

		return res.json(produto);
	},

	async update(req, res) {
		const produto = await Produtos.findByIdAndUpdate(req.params.id, req.body, { new: true });

		return res.json(produto);
	},

	async destroy(req, res) {
		const produto = await Produtos.findByIdAndRemove(req.params.id);

		return res.json({ 'status': 'detroyed'});
	}
};
