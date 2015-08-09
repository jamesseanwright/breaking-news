<!DOCTYPE html>
<html>
	<head>
		<title>Breaking News</title>
		<link rel="stylesheet" href="/main.css" />
	</head>
	<body>
		<h1>Breaking News</h1>

		<section role="main">
			{{ stories|safe }}
		</section>

		<script src="/main.js"></script>
	</body>
</html>