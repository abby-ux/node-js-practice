/**
 * ch 6: processing form data with express
 * 
 * always always check data before it is used elsewhere!
 * 
 * -- processing HTTP POSt data body:
 * HTTP POST request sent via form data places all the data in the body of the request
 * express does not parse the data by defualt, so we need to use 
 * epress.urlencoded() middleware function to populate a Request.body() propety, 
 * with an object with name/pair values
 * 
 * 
 * 
 */