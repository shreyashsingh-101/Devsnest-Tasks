const Templates = ({ templates, setMeme }) => {
  return (
    <div className="container">
      {templates.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => {
            setMeme(template);
          }}
        >
          <div
            style={{ backgroundImage: `url(${template.url})` }}
            className="image"
          ></div>
          <div className="m_name">
            <span className="m_name_int">{template.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
