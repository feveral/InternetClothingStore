'use strict';

module.exports = class Product{

	constructor(){

	}

	static toProduct(data){
		var product = new Product()
		product.Id = data['ProductID'];
		product.Name = data['Name'];
		product.Category = data['Class'];
		product.SubCategory = data['SubClass'];
		product.Price = data['Price'];
		product.Color = data['Color'];
		product.Size = data['Size'];
		product.Stock = data['Stock'];
		product.ImagePath = data['ImagePath'];
		return product;
	}

	set Id(newId){
		this.id = newId;
	}

	set Name(newName){
		this.name = newName;
	}

	set Category(newCategory){
		this.category = newCategory;
	}

	set SubCategory(newSubCategory){
		this.subCategory = newSubCategory;
	}

	set Price(newPrice){
		this.price = newPrice;
	}

	set Color(newColor){
		this.color = newColor;
	}

	set Size(newSize){
		this.size = newSize;
	}

	set Stock(newStock){
		this.stock = newStock;
	}

	set ImagePath(newImagePath){
		this.imagePath = newImagePath;
	}

	get Id(){
		return this.id;
	}

	get Name(){
		return this.name;
	}

	get Category(){
		return this.category;
	}

	get SubCategory(){
		return this.subCategory;
	}

	get Price(){
		return this.price;
	}

	get Color(){
		return this.color;
	}

	get Size(){
		return this.size;
	}

	get Stock(){
		return this.stock;
	}

	get ImagePath(){
		return this.imagePath;
	}
}