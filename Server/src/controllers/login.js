const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const existingUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!existingUser) return res.status(404).json({ access: false });

  return res.status(200).json({ access: true });
};

module.exports = {
  login,
};
