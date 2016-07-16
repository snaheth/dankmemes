*Just like reddit:*
> filter by: hour, day, week, month, year, all
> 
> You need to use one of these filters for the first parameter, else it will error out.

<pre><code>var memes = require('dankmemes');
memes('day', 2, function(err, data) {
	console.log("The 2 most dankest memes of the day: " + JSON.stringify(data));
});
</code></pre>