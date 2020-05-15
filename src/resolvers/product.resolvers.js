
import Product from './../models/Product'

const productResolver = {
    Query: {
        async getProductos(){
            const all_productos = await Product.find() 
            return all_productos
        }
    },
    Mutation: {
        async createProduct(root, { input }) {
            const newProduct = new Product(input)
            await newProduct.save()
            return newProduct
        },        
        async updateProduct(root, { _id, input }) {
            return await Product.findByIdAndUpdate(_id, input, {new: true})
        },
        async deleteProduct(root, { _id }) {
            return await Product.findByIdAndDelete(_id)
        }
    }
};

export default productResolver