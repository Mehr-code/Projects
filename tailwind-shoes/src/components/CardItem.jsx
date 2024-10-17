export function CardItem({ item }) {
  return (
    <div>
      <img src={item.src} alt="" />
      <div>{item.title}</div>
      <div>{item.descripion}</div>
      <div>{item.price}</div>
    </div>
  );
}
