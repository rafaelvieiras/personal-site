export default function ProjectsList({ projects }: { projects: any[] }) {
  return (
    <div className="flex flex-col gap-5">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
          <div className="flex flex-row gap-5">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-sm font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
