const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>ECS Demo App</title>
            </head>
            <body>
                <h1>Hello from AWS ECS 🚀</h1>
                <p>Docker + GitHub Actions + Amazon ECS</p>
                <p>Deployment successful!</p>
            </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});