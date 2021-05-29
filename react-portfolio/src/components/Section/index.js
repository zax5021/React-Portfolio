function Section(props) {
  return (
    <section className="row" id={props.id}>
      {props.children}
    </section>
  );
}

export default Section;
