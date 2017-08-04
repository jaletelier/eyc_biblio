module.exports = {
  response: function(req, res, err, data) {
    console.log('Redirect -> '+JSON.stringify(req.query));
    if (req.query.redirect!=undefined) {
      return res.redirect('back');
    } else {
      if (err) {
        return res.status(400).send(err);
      }
      return res.send(data);
    }
  }
}