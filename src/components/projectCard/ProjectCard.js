import "./ProjectCard.scss";
import Icons from "../../utils/TechIcons";
const ProjectCard = (props) => {
	const block = "card";
	const project = props.props;

	return (
		<section className={block}>
			<div className={`${block}__media`}>
				<img
					src={project.image}
					alt={project.title}
					className={`${block}__media__img`}
				/>
				<div className={`${block}__media__icons`}>
					{project &&
						project.icons.map((src) => (
							<img key={src} src={src} alt="tech icon" />
						))}
				</div>
			</div>
			<div>
				{project && <h1 className={`${block}__title`}>{project.title}</h1>}

				<p className={`${block}__description`}>
					{project && project.description}
				</p>
				<div className={`${block}__buttons`}>
					{project.git && (
						<a href={project.git}>
							<img
								src={Icons["git"]}
								alt={project.title}
								className={`${block}__buttons__button`}
							/>
						</a>
					)}
					{project.youtube && (
						<a href={project.youtube}>
							<img
								src={Icons["youtube"]}
								alt={project.title}
								className={`${block}__buttons__button`}
							/>
						</a>
					)}
				</div>
			</div>
		</section>
	);
};
export default ProjectCard;
