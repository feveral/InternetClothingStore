
function GetProductByCategory(categoryOrSubCategory,callback){
	var apiUrl = GetServerUrl() + "/product/" + categoryOrSubCategory;
	AjaxGet(apiUrl,callback);
}

function GetSearchProductByName(name,callback){
	var apiUrl = GetServerUrl() + "/product/search/" + name;
	AjaxGet(apiUrl,callback);	
}

function GetProductById(id,callback){
	var apiUrl = GetServerUrl() + "/product/id/" + id;
	AjaxGet(apiUrl,callback);	
}

function GetProductColorByName(name,callback){
	var apiUrl = GetServerUrl() + "/product/color/" + name;
	AjaxGet(apiUrl,callback);	
}

function GetProductSizeByName(name,callback){
	var apiUrl = GetServerUrl() + "/product/size/" + name;
	AjaxGet(apiUrl,callback);	
}

function GetProductByName(name,callback){
	var apiUrl = GetServerUrl() + "/product/name/" + name;
	AjaxGet(apiUrl,callback);	
}

function GetProductPriceByNameColor(name,color,callback){
	var apiUrl = GetServerUrl() + "/product/price/?Name=" + name + '&Color=' + color ;
	AjaxGet(apiUrl,callback);
}

function GetProductByAppearence(name,color,size,callback){
	var apiUrl = GetServerUrl() + "/product/appearence/?Name=" + name + '&Color=' + color + '&Size=' + size ;
	AjaxGet(apiUrl,callback);
}

function GetShoppingCar(callback){
	var apiUrl = GetServerUrl() + '/shoppingCar';
	AjaxGet(apiUrl,callback);
}

function GetIsManager(callback){
	var apiUrl = GetServerUrl() + '/member/isManager';
	AjaxGet(apiUrl,callback);
}

function GetNewProduct(callback){
	var apiUrl = GetServerUrl() + "/product/" + "newproduct";
	AjaxGet(apiUrl,callback);
}

function GetUserName(callback){
	var apiUrl = GetServerUrl() + "/login/getUserName";
	AjaxGet(apiUrl,callback);
}

function GetSubCategoryByCategory(catagory,callback){
	var apiUrl = GetServerUrl() + "/product/subCategory/" + catagory;
	AjaxGet(apiUrl,callback);
}

/*post  managerOrderDetail.js*/
function DeleteOrderFromManager(data,callback){
	var apiUrl = GetServerUrl() + "/order/DeleteOrder";
	AjaxPost(apiUrl,data,callback);
}

/*shoppingCar.js*/
function CheckProductQuantityIfEnough(callback){
	var apiUrl = GetServerUrl() + "/shoppingCar/CheckQuantity";
	AjaxGet(apiUrl,callback);
}