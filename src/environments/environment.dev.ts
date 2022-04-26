
export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  CUSTOMER_BASE_URL: 'http://localhost:3000/customers/',
  CUSTOMER: {
  	GET_ALL_CUSTOMERS: 'list',
  	GET_CUSTOMER_DETAILS: 'view/:id',
    ADD_CUSTOMER: 'add',
  	UPDATE_CUSTOMER: 'update',
  	DELETE_CUSTOMER	: 'delete',
  	SEARCH_CUSTOER: 'search'	
  },
  ADMINPRODUCTS_BASE_URL: 'http://localhost:3000/adminproducts/',
  ADMINPRODUCTS:{
    GET_ALL_PRODUCTS: 'list',
    ADD_SINGLE_PRODUCT:'add'
  }

  /*Add al config for product settings etc*/
};
