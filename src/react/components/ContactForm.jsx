import Button from "./Button";

export default function ContactForm() {
	return (
		<form action="#">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" placeholder="Name"/>
			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Email"/>
			<label htmlFor="message">Message</label>
			<textarea id="message" name="message" placeholder="Message"></textarea>
			<Button  label="submit" icon={{name: "arrow", rear: true}}/>
		</form>
	);
}