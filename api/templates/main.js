function template(title, initialState = {}, content = ""){
    let scripts = `<script>
		window.__STATE__ = ${JSON.stringify(initialState)}
	</script>
	<script src="/bundle/bundle.js"></script>`;
    
    let page = `<!DOCTYPE html>
    	<html lang="en">
        	<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title> ${title} </title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
				<link href="/css/app.css" rel="stylesheet">				
            </head>
            <body>
            	<div id="main-container" class="wrap-inner">
                	<!--- magic happens here -->  ${content}
                </div>
            	${scripts}
			</body>
		</html>`;
  
	return page;
}
  
module.exports = template;
  