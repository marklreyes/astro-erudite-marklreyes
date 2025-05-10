import { useState } from 'react'
import * as React from 'react'

const ContactForm = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Set submitting to true at the start
		setSubmitting(true);

		try {
		  const form = e.target as HTMLFormElement;
		  const formData = new FormData(form);

		  // Let Netlify handle the form submission
		  fetch('/', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams(formData as any).toString()
		  })
		  .then((response) => {
			console.log('Form submission response:', response.status, response.statusText);
			if (!response.ok) {
			  throw new Error(`Form submission failed with status ${response.status}`);
			}
			setResponseMessage('Thank you for your message! I\'ll get back to you soon.');
			setFormSubmitted(true);
			form.reset();
			// Set submitting to false on success
			setSubmitting(false);
		  })
		  .catch(error => {
			console.error('Error submitting form:', error);
			setResponseMessage('There was an error submitting your form. Please try again.');
			// Set submitting to false on error
			setSubmitting(false);
		  });
		} catch (error) {
		  console.error('Error in form submission:', error);
		  setResponseMessage('Something went wrong. Please try again later.');
		  // Set submitting to false on any other error
		  setSubmitting(false);
		}
	};

	return (
		<>
			{formSubmitted ? (
				<div className="mt-8 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
					<p>{responseMessage}</p>
					<button
						onClick={() => setFormSubmitted(false)}
						className="mt-4 px-4 py-2 text-white dark:text-black bg-primary hover:bg-primary/90 rounded-md"
					>
						Send another message
					</button>
				</div>
			) : (
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
							rows={5}
							required
							className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
						></textarea>
					</div>
					<button
						type="submit"
						disabled={submitting}
						className="px-6 py-2 text-white dark:text-black bg-primary hover:bg-primary/90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70"
						>
						{submitting ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			)}
		</>
	)
}

export default ContactForm
