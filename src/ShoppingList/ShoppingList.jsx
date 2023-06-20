import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <ShoppingListItem
            key={index}
            resource={item.resource}
            quantity={item.quantity}
            completed={item.completed}
          />
        );
      })}

      {/* {items.map((item, index) => {
        return (
          <li
            key={index}
            style={{
              textDecoration:
                item.completed === true ? "line-through" : "underline",
              // similar to above line but like shorthand because item.completed is a boolean, hence, no need for strict equality.
              // item.completed ? "line-through" : "underline", ()
            }}
          >
            {item.resource} - {item.quantity}
          </li>
        );
      })} */}
    </ul>
  );
}
