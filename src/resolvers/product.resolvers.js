let data = require('./data.json');

const productResolver = {
    Query: {
        products() {
            return data.products
        },
        example(root, { id }){
            console.log("Test...", id)
            return data.products.filter(p => p.id == id)
        }
    }
};

export default productResolver