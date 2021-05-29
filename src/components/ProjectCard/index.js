function ProjectCard({ id, project }) {
  const { name, image, alt, appLink, repo } = project;
  return (
    <figure className="card code-card" id={id}>
      <h2 className="card-header">
        <a href={repo}>{name}</a>
      </h2>
      <div className="imagewrap">
        <a href={appLink}>
          <img loading="lazy" src={image} alt={alt} />
        </a>
      </div>
    </figure>
  );
}

export default ProjectCard;
