# Titanium Table Row Extensions for IOS

This is a simple module that extends TiUITableViewRow to include some methods that are not available in Titanium

### New methods added:

1. isVisible() - returns true/false if the row is visible in the tableview
2. getTopOffset() - returns the distance from the table's top to the row

I used this module to build a semi native parallax effect for table rows.

You only need to require() the module once per application.

```javascript
//At the beginning of your app
var m = require('net.cappelleri.tableviewrowextension');

//Later on...
for (var i = 0; i < tableData.length; i++) {
var r = tableData[i];
Ti.API.info("Checking on row n. " + i,"Row is visible?", r.isVisible(), "Row offset from table top is:", r.getTopOffset());

}
```

