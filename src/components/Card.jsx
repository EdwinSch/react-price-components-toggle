const Card = (props) => {
  return (
    <article className={props.class}>
      <h2>{props.title}</h2>
      <p className="price">
        <span>$</span>
        {props.price}
      </p>
      <div className="features-wrapper">
        <p className="feature">{props.storage} Storage</p>
        <p className="feature">{props.users} Users Allowed</p>
        <p className="feature">Send up to {props.send} GB</p>
      </div>
      <button className="learn-more" type="button">
        learn more
      </button>
    </article>
  );
};

export default Card;
