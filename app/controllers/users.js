module.exports = app => {
	// Create an user
	app.post('/user', (req, res) => {
		const connection = app.dao.connectionFactory();
		const userDAO = new app.dao.userDAO(connection);    
		const user_p = req.body;

		const user = {
			"user": user_p.user,
			"password": encrypt(user_p.password)
		};

		userDAO.add(user)
			.then(result => res.status(201).send(`User ${user.user} was created`))
			.catch(err => res.status(400).send(err));
	});

	//Encrypt and Decrypt
	const crypto = require('crypto'), algorithm = 'aes-256-ctr', password = 'd6F3Efeq';
	function encrypt(text){
		const cipher = crypto.createCipher(algorithm,password)
		let crypted = cipher.update(text,'utf8','hex')
		crypted += cipher.final('hex');
		return crypted;
	}
	
	function decrypt(text){
		const decipher = crypto.createDecipher(algorithm,password)
		let dec = decipher.update(text,'hex','utf8')
		dec += decipher.final('utf8');
		return dec;
	}
}