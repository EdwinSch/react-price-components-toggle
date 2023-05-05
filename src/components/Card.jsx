const Card = ({ stylingClass, title, price, storage, users, send }) => {
  return (
    <article className={stylingClass}>
      <h2>{title}</h2>
      <p className="price">
        <span>$</span>
        {price}
      </p>
      <div className="features-wrapper">
        <p className="feature">{storage} Storage</p>
        <p className="feature">{users} Users Allowed</p>
        <p className="feature">Send up to {send} GB</p>
      </div>
      <button className="learn-more" type="button">
        learn more
      </button>
    </article>
  );
};

export default Card;
