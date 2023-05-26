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
    index(req, res) {
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
    show(req, res) {
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
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, dci, classTherapeutic, laboratory } = req.body;
            const avtar = req.file && `/images/${req.file.filename}`;
            try {
                const newProduct = yield Product_1.default.create({
                    name,
                    dci,
                    classTherapeutic,
                    laboratory,
                    avtar,
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
     * @route   PUT api/products/:id
     * @desc    Update a product
     * @access  Public
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avatar = req.file && `/images/${req.file.filename}`;
            const product = yield Product_1.default.findById(req.params.id);
            if (!product)
                return res.status(404).json({ message: "Product not found" });
            const updatedProduct = yield Product_1.default.findByIdAndUpdate(req.params.id, Object.assign(Object.assign({}, req.body), { avatar }), { new: true });
            return res.status(200).json({
                message: "Product updated successfully",
                updatedProduct,
            });
        });
    }
    /**
     * @route   DELETE api/products/:id
     * @desc    Delete a product
     * @access  Public
     */
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.default.findById(req.params.id);
                if (!product)
                    return res.status(404).json({ message: "Product not found" });
                const deletedProduct = yield Product_1.default.findByIdAndDelete(req.params.id);
                return res.status(200).json({
                    message: "Product deleted successfully",
                    deletedProduct,
                });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new ProductsController();
