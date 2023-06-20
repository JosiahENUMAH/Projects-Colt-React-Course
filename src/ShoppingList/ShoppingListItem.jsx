export default function ShoppingListItem({ resource, quantity, completed }) {
  const styles = {
    color: completed ? "red" : "blue",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <li style={styles}>
      {resource} - {quantity}
    </li>
  );
}
