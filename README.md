*Pull the image URLs of the dankest memes for use in your website, app, etc*

To install:

```shell
npm install dankmemes
```

Example:

```js
var memes = require('dankmemes');
memes('day', 2, function(err, data) {
	console.log("The 2 most dankest memes of the day: " + JSON.stringify(data));
});
```

Note about memes params:
> filter by: hour, day, week, month, year, all
> 
> You need to use one of these filters for the first parameter, else it will error out.
