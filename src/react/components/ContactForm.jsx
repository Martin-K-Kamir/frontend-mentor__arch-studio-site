import Button from "./Button";
import React, {useState} from "react";

export default function ContactForm() {
	const [nameObject, setNameObject] = useState({
		key: "Name",
		value: "",
		label: "Name",
		error: false,
		minLimit: 4,
		maxLimit: 30,
		pattern: "^[\\w'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$",
	});

	const [emailObject, setEmailObject] = useState({
		key: "Email",
		value: "",
		label: "Email",
		error: false,
		minLimit: 4,
		maxLimit: 40,
		pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
	});

	const [messageObject, setMessageObject] = useState({
		key: "Message",
		value: "",
		label: "Message",
		error: false,
		minLimit: 10,
		maxLimit: 500,
	});

	function validateInput(obj, setObj) {
		if (!obj.value) {
			setObj({
				...obj,
				error: true,
				label: `Please enter your ${obj.key}`,
			})
		} else {
			if (obj.value.length < obj.minLimit) {
				setObj({
					...obj,
					error: true,
					label: `${obj.key} - must be at least ${obj.minLimit} characters long`,
				})
			}

			if (!new RegExp(obj.pattern).test(obj.value)) {
				setObj({
					...obj,
					error: true,
					label: `${obj.key} - invalid format`,
				})
			}
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		validateInput(nameObject, setNameObject);
		validateInput(emailObject, setEmailObject);
		validateInput(messageObject, setMessageObject);

		if (!nameObject.error && !emailObject.error && !messageObject.error) {
			alert("Form submitted successfully");
		}
	}

	function handleChanges(e) {

		switch (e.target.id) {
			case "name":
				setNameObject({
					...nameObject,
					error: false,
					label: "Name",
					value: e.target.value.slice(0, nameObject.maxLimit),
				});
				break;
			case "email":
				setEmailObject({
					...emailObject,
					error: false,
					label: "Email",
					value: e.target.value.slice(0, emailObject.maxLimit),
				});
				break;
			case "message":
				setMessageObject({
					...messageObject,
					error: false,
					label: "Message",
					value: e.target.value.slice(0, messageObject.maxLimit),
				});
				break;
			default:
				break;
		}
	}

	return (
		<form action="#" className="form" name="contactform" onSubmit={e => handleSubmit(e)}>
			<div className="[ stack ] [ space-5 ]">
				<div className="form__group" data-error={nameObject.error}>
					<label htmlFor="name">{nameObject.label}</label>
					<input type="text"
					       id="name"
					       name="name"
					       required={true}
					       pattern={nameObject.pattern}
					       minLength={nameObject.minLimit}
					       maxLength={nameObject.maxLimit}
					       placeholder={nameObject.label}
					       title="Enter valid full name"
					       onChange={e => handleChanges(e)}
					       value={nameObject.value}
					/>
				</div>
				<div className="form__group" data-error={emailObject.error}>
					<label htmlFor="email">{emailObject.label}</label>
					<input type="email"
					       id="email"
					       name="email"
					       required={true}
					       pattern={emailObject.pattern}
					       minLength={emailObject.minLimit}
					       maxLength={emailObject.maxLimit}
					       placeholder={emailObject.label}
					       title="Enter valid email address"
					       onChange={e => handleChanges(e)}
					       value={emailObject.value}
					/>
				</div>
				<div className="form__group" data-error={messageObject.error}>
					<label htmlFor="message">{messageObject.label}</label>
					<textarea
						id="message"
						name="message"
						required={true}
						minLength={messageObject.minLimit}
						maxLength={messageObject.maxLimit}
						placeholder={messageObject.label}
						title="Enter your message"
						onChange={e => handleChanges(e)}
						value={messageObject.value}
					></textarea>
				</div>
			</div>
			<Button label="submit" type="box" utils="self-justify-end" icon={{name: "arrow", rear: true}}/>
		</form>
	);
}