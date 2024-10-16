import productsDB from "../db/datebase.js";

// Obtener productos
export const getProducts = (req, res) => {
    res.json(productsDB);
};

// Crear producto
export const createProduct = (req, res) => {
    const { name, description, price } = req.body;

    const newProduct = {
        id: productsDB.length + 1,
        name,
        description,
        price: parseFloat(price),
        imageUrl: req.file ? req.file.path : null
    };

    productsDB.push(newProduct);
    res.status(201).json({ message: "Producto creado", product: newProduct });
};