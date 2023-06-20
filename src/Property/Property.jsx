import PropertyItem from "./PropertyItem";
import { properties } from "./propertyData";

function Property() {
  const styles = {
    display: "flex",
  };
  return (
    <div style={styles}>
      {properties.map((p) => {
        return (
          <PropertyItem
            key={p.id}
            name={p.name}
            rating={p.rating}
            price={p.price}
          />
        );
      })}
    </div>
  );
}

export default Property;
