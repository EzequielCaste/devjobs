// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const url =
    req.query.site === 'github'
      ? `https://jobs.github.com/positions.json?description=${req.query.tag}&page=1`
      : `http://remoteok.io/api?tags=${req.query.tag}`;

  return fetch(url, {
    headers: {
      Host: '',
    },
  })
    .then((resp) =>
      resp.json().then((data) => {
        res.status(200).json(data);
      })
    )
    .catch((err) => res.status(500).json(err));
};
