import "./Card.css";

function Card({ titulo, items = [] }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;