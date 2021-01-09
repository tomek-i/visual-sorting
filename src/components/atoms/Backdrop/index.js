import "./style.css";

export const Backdrop = (props) => {
  return (
    <div className="backdrop">
      <div className={`${"drawing"}`}>{props.children}</div>
    </div>
  );
};
