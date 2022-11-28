const { Products, Users } = require("../models");

class ProductsServices {
  static async getProducts() {
    try {
      const result = await Products.findAll({
        attributes: ["name", "availableQty","price"],
        include: {
          model: Users,
          as: "user",
          attributes: ["username"]
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

//   static async create(newProduct) {
//     try {
//       const result = await Products.create(newProduct);
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   }
}

module.exports = ProductsServices;