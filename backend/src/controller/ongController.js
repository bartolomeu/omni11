const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ong').insert({
      id, name, email, whatsapp, city, uf
    })

    return response.json({ msg: "user cadastrado", id });
  },

  async list (resquest, response) {
    const ongs=await connection('ong').select("*");
    return response.json(ongs);
  },
}