var Realtime = require("realtime-storage");
 
var storageRef = Realtime.Storage.create({
    applicationKey: "X8hZMI",
    authenticationToken: "I6geXeTvGoGw"
});
 
var tableRef = storageRef.table("SomeTable");
 
// Get all items from table SomeTable
 
tableRef.getItems(function(itemSnapshot) {
  if (itemSnapshot) {
    console.log("Item retrieved: ", itemSnapshot.val());
  } else {
    console.log("No more items in table");
  }
},
function(error) {
  console.log("Oops, error retrieving items:", error);
});
 
// Be notified in realtime when an item is updated in SomeTable
 
tableRef.on("update", function(itemSnapshot) {
	debugger;
    console.log("Item updated:", itemSnapshot.val());
});



