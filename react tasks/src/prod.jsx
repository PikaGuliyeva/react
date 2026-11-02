import { products } from "./db";

let currentIndex = 0;

function Prod() {
  return (
    <div>
      <h1>{products[currentIndex].name}</h1>

      <h3>{products[currentIndex].category}</h3>

      <h2>{products[currentIndex].price} AZN</h2>

      <button
        onClick={() => {
          if (currentIndex < products.length - 1) {
            currentIndex++;
            console.log(currentIndex);
          }
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          if (currentIndex > 0) {
            currentIndex--;
            console.log(currentIndex);
          }
        }}
      >
        Previous
      </button>
    </div>
  );
}

export default Prod;
