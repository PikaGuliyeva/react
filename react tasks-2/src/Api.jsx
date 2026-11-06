import { useState, useEffect } from "react";

function DependecyDemo() {
const [count, setCount] = useState(0);
// Misal 1 Bosh massiv [] tek rendder
useEffect(() => {
console.log("tek render");
}, []);
// Asili oldugu massiv [count], state/props deyishdikce deyisir
useEffect(() => {
console.log("Asili oldugu massiv");
}, [count]);
return (
<div style={{ padding: "30px", background: "lightblue" }}>
<h2>Dependecy array praktika</h2>
<p>Saygac</p>
<button
style={{ padding: "10px", background: "red", color: "#FFF" }}
onClick={() => setCount(count + 1)}
>
Saygac
</button>
</div>
);
}
export default DependecyDemo;