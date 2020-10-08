const axios = require('axios')

module.exports = function(application){

    application.post('/repositories', async (req, res)=>{

        const username = req.body.username 
        let data;   
        console.log(username)

        let url = `https://api.github.com/users/${username}/repos`
        //fazer o get no github e devolver a resposta com os dados da table

        try {
          const result = await axios.get(url)
          data = await result.data
          return res.send(data);
        } 
        catch (error) {
          console.log(error)
          return res.status(400).send('Erro ao realizar consulta')
        }
    })
}