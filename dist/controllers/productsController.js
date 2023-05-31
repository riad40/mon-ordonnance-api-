"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
class ProductsController {
    /**
     * @route   GET api/products
     * @desc    Get all products
     * @access  Public
     */
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.find();
                return res.status(200).json(products);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET api/products/:id
     * @desc    Get a product
     * @access  Public
     */
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.default.findById(req.params.id);
                if (!product) {
                    return res.status(404).json({ message: "Product not found" });
                }
                return res.status(200).json(product);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   POST api/products
     * @desc    Create a product
     * @access  Public
     */
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, dci, classTherapeutic, laboratory, dosage } = req.body;
            const avatar = req.file && `/images/${req.file.filename}`;
            const dosageFormatted = JSON.parse(dosage);
            try {
                const newProduct = yield Product_1.default.create({
                    name,
                    dci,
                    classTherapeutic,
                    laboratory,
                    avatar,
                    dosage: dosageFormatted,
                });
                return res.status(201).json({
                    message: "Product created successfully",
                    newProduct,
                });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    /**
     * @route   GET api/products/count
     * @desc    Get products count
     * @access  Public
     */
    getProductsCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productsCount = yield Product_1.default.countDocuments();
                return res.status(200).json({ count: productsCount });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new ProductsController();
