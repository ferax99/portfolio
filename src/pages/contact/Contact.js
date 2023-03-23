import Icons from "../../utils/TechIcons";
import "./Contact.scss";
const Contact = () => {
	return (
		<section className="contact">
			<h1 className="contact__title">Contact Me .</h1>
			<div className="contact__buttons">
				<a href="https://github.com/ferax99">
					<img
						src={Icons["git"]}
						alt="git"
						className="contact__buttons__button"
					/>
				</a>
				<a href="https://www.fiverr.com/ferax99?public_mode=true">
					<img
						src={Icons["fiverr"]}
						alt="fiverr"
						className="contact__buttons__button"
					/>
				</a>
				<a href="https://us11.list-manage.com/contact-form?u=8b3c8a6fcafe30907def2005d&form_id=8f3692c6e4c5cb142d89638f2744bdf4">
					<img
						src={Icons["mail"]}
						alt="mail"
						className="contact__buttons__button"
					/>
				</a>
				<a href="https://www.linkedin.com/in/fernando-b-9298721b3/">
					<img
						src={Icons["linkedin"]}
						alt="linkedin"
						className="contact__buttons__button"
					/>
				</a>
			</div>
		</section>
	);
};
export default Contact;
