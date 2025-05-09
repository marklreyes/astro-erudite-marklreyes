import { useState } from 'react'
import * as React from 'react'

const ContactForm = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setFormSubmitted(true);
				setResponseMessage('Thank you for your message!');
			} else {
				setResponseMessage('There was an error submitting the form.');
			}
		} catch (error) {
			setResponseMessage('There was an error submitting the form.');
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				data-netlify="true"
				name="contact"
				method="POST"
				netlify-honeypot="bot-field"
				className="mt-8 space-y-6"
				>
				{/* Hidden field for Netlify form name */}
				<input type="hidden" name="form-name" value="contact" />

				{/* Honeypot field to prevent spam */}
				<p className="hidden">
					<label>
					Don't fill this out if you're human: <input name="bot-field" />
					</label>
				</p>
				<div className="grid gap-4 sm:grid-cols-2">
					<div>
					<label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					</div>
					<div>
					<label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
					<textarea
					id="message"
					name="message"
					required
					className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
					></textarea>
				</div>
				<button
					type="submit"
					className="px-6 py-2 text-white dark:text-black bg-primary hover:bg-primary/90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
					>
					Submit
				</button>
			</form>
			{formSubmitted && (
				<div className="mt-4 text-green-500">
					{responseMessage}
				</div>
			)}
			{!formSubmitted && responseMessage && (
				<div className="mt-4 text-red-500">
					{responseMessage}
				</div>
			)}
		</>
	)
}

export default ContactForm
