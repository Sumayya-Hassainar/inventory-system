// Fake inventory array
let items = [
  { id: 1, name: "Laptop", quantity: 5, price: 60000 },
  { id: 2, name: "Mouse", quantity: 25, price: 500 },
  { id: 3, name: "Keyboard", quantity: 15, price: 1500 },
   { id: 4, name: "Monitor", quantity: 10, price: 12000 },
  { id: 5, name: "Smartphone", quantity: 8, price: 30000 },
  { id: 6, name: "Headphones", quantity: 20, price: 2000 }
];

// ✅ GET all items
exports.getAllItems = (req, res) => {
  res.json(items);
};

// ✅ POST add new item
exports.addItem = (req, res) => {
  const newItem=req.body
  items.push(newItem);
  res.status(201).json(newItem);
};

// ✅ PUT replace entire item
exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item)
     return res.status(404).json({ error: "Item not found" });

  const { name, quantity, price } = req.body;
  if (!name || !quantity || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  item.name = name;
  item.quantity = quantity;
  item.price = price;

  res.json(item);
};
// ✅ PATCH partial update
exports.patchItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id ===id);

  if (!item) 
    return res.status(404).json({ error: "Item not found" });

  const { name, quantity, price } = req.body;
  if (name !== undefined) item.name = name;
  if (quantity !== undefined) item.quantity = quantity;
  if (price !== undefined) item.price = price;

  res.json(item);
};

// ✅ DELETE item
exports.deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1)
     return res.status(404).json({ error: "Item not found" });

  const deleted = items.splice(index, 1);
  res.json({ message: "Item deleted", deleted });
};
