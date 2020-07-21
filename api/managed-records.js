import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...
const retrieve = (options) => {
  // const limit = options.query.limit || 10;
  // const page = options.query.page || 1;
  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;


  // const options = settings || {};
  // const page = options.page || 1;

  function filterColor(colorsArray, query) {
    if (options.colors && options.colors.length > 0) {
      return colorsArray.filter(color => color.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    // const colors = ['red', 'yellow', 'green','brown'];
  }

  const uri = URI(window.path).addSearch("limit", 10).addSearch("color[]",['red']);
  // const uri = URI(window.path).addSearch("limit", 10).addSearch("color[]", filterColor(['red']));
  // const uri = URI(window.path).addSearch("limit", limit).addSearch("offset", (page - 1) * limit);


  console.log(uri.query())

  return fetch(uri)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(
    function(error) {
      console.log("ERROR: " + error);
    }
  );

}

export default retrieve;
