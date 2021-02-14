// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
 return fetch(`https://jobs.github.com/positions.json?description=${req.query.tag}&page=1`)
 .then( (resp) => resp.json().then( (data) => {
        res.status(200).json( data )
      })   
    )   
}
