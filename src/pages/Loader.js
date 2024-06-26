const Loader = () => (
  <div id="_loading">
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 29,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <h4
        style={{
          position: "absolute",
          left: "50%",
          marginTop: "25%",
          display: "inline-block",
        }}
      >
        <i className="icon icon-spinner icon-spin icon-5x "> </i>
      </h4>
    </div>
    {/* <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div> */}
  </div>
);

export default Loader;
