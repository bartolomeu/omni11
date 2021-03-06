const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const{id}= request.body;
  const ong = await connection('ong').where('id', id).select('name').first();

    if(!ong){
      response.status(400).json({error:"No ONG foundwith this ID"});
    }

    return response.json(ong);
  }
}