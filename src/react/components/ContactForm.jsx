import Button from "./Button";

export default function ContactForm() {
	return (
		<form action="#" className="form">
			<div className="stack">
				<div className="form__group">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" placeholder="Name" required={true} pattern="[a-zA-Z-\p{L}]+" title="Enter valid full name"/>
				</div>
				<div className="form__group">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" placeholder="Email" required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Enter valid email address"/>
				</div>
				<div className="form__group">
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" placeholder="Message" required={true} minLength="30" maxLength="500" title="Enter your message"></textarea>
				</div>
			</div>
			<Button label="submit" type="box" utils="self-justify-end" icon={{name: "arrow", rear: true}}/>
		</form>
	);
}