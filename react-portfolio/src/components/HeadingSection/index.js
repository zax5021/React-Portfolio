function HeadingSection(props) {
  return (
    <>
      <div className="heading" id={props.id}>
        <h2>{props.headingTitle}</h2>
      </div>
      {props.children}
    </>
  );
}

export default HeadingSection;
