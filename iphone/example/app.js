// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window

var tableData = [];

var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var table = Ti.UI.createTableView({ objName: 'table' });

for (var i = 0; i <= 20; i++){
  var row = Ti.UI.createTableViewRow({
    className: 'row',
    objName: 'row',
    touchEnabled: true,
    height: 100
  });

  var enabledWrapperView = Ti.UI.createView({
    backgroundColor:'#008FD5',
    objName: 'enabledWrapperView',
    rowID: i,
    width: Ti.UI.FILL, height: '100%'
  });

  var disabledWrapperView = Ti.UI.createView({
    backgroundColor:'#A2E0FF',
    objName: 'disabledWrapperView',
    touchEnabled: false,
    width: 300, height: '80%'
  });
  enabledWrapperView.add(disabledWrapperView);

  var label = Ti.UI.createLabel({
    backgroundColor:'#313F48',
    color: 'white',
    objName: 'label',
    text: i,
    touchEnabled: false,
    left: 0,
    width: 200
  });
  disabledWrapperView.add(label);

  row.add(enabledWrapperView);
  tableData.push(row);
}

table.setData(tableData);
table.addEventListener('singletap', function(e){
  if (e.source && e.source.objName !== 'table'){
    Ti.API.info('Row swiped: ' + e.source);
    Ti.API.info('Row swiped: ' + e.source.objName);
    Ti.API.info('Row ID : ' + e.source.rowID);
    var data = table.data;
    //Ti.API.info('Row Object', tableData[e.source.rowID].isVisible());
    for (var i = 0; i < tableData.length; i++) {
    	var r = tableData[i];
    	Ti.API.info("Checking on row n. " + i,"Row is visible?", r.isVisible(), "Row offset from table top is:", r.getTopOffset());
    	
    }
  }
});

win.add(table);
win.open();

// TODO: write your module tests here
var tableviewrowextension = require('net.cappelleri.tableviewrowextension');
Ti.API.info("module is => " + tableviewrowextension);


Ti.API.info("module exampleProp is => " + tableviewrowextension.exampleProp);
tableviewrowextension.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = tableviewrowextension.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}


