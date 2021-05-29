function Wrapper(props) {
  return (
    <div className="content" id="allContent">
      {props.children}
    </div>
  );
}

export default Wrapper;
