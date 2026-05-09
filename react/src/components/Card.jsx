function Card({ img, name, className }) {
  return (
    <div className={className}>
      <img src={img} alt={name} width="200" />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;