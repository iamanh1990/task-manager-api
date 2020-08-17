const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail
		.send({
			to: email,
			from: 'bachthithuhieu90@gmail.com',
			subject: 'Thanks for joining in',
			text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
		})
		.then(() => {
			console.log('Status: Success');
		})
		.catch((e) => {
			console.log('Status: Error', e);
		});
};

const sendCancelEmail = (email, name) => {
	sgMail
		.send({
			to: email,
			from: 'bachthithuhieu90@gmail.com',
			subject: 'Sorry for your cancelation',
			text: `Hi ${name}, sorry for your cancelation on the app. Do you mind if I ask the reason of your cancelation. Thanks`
		})
		.then(() => {
			console.log('Status: SUCCESS');
		})
		.catch((err) => {
			console.log('Status: Error', err);
		});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail
};
