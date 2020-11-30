# Sandbox-API

Local Express server for testing basic endpoints

### Local Deployment
[1] Clone repository 
    ```
    git clone https://github.com/alex-ac2/sandbox_api.git
    ```

[2] Navigate into project directory
    ```
    cd sandbox_api
    ```

[3] Install dependencies
    ```
    npm install
    ```

[4] Run with Nodemon!
    ```
    npm run local
    ```

#### Sample Curl Post Request:

```
curl -d '{"username":"test@gmail.com", "message":"This is a test message"}' -H "Content-Type: application/json" -X POST http://localhost:3000/message

```