const axios = require('axios')

module.exports = function(application){

    application.post('/repositories', async (req, res)=>{

        const username = req.body.username    

        let url = `https://api.github.com/users/${username}/repos`
        //fazer o get no github e devolver a resposta com os dados da table

        const result = await axios.get(url)
        const data = await result.data

        res.send(data);
    })
}