<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email Page</title>
    @vite('resources/sass/app.scss')
    @vite('resources/js/app.js')
</head>
<body>
    <button id="myButton" class="bg-primary">Click Me</button>
</body>
</html>
