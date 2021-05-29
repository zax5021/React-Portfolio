function Article(props) {
  return (
    <article className={props.class} id={props.id}>
      {props.children}
    </article>
  );
}

export default Article;
