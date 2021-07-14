// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const url = `https://remotive.io/api/remote-jobs?search=${req.query.tag}`;

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
