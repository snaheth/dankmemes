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

Documentation:

*(timeLimit, numLimit, callback)*
> timeLimit options: hour, day, week, month, year, all
> callback will either have an error or data: see example above
