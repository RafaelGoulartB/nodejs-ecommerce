function msg(req) {
  const success = req.session['success'];
  const warning = req.session['warning'];

  req.session['success'] = null;
  req.session['warning'] = null;

  return success, warning;
}

module.exports = () => msg;
