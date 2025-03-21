const express = require("express");


const app = express();
app.use(express.json());



// app.use(cookieParser());
app.get("/",(req,res)=>{
    return res.status(200).send({message:"Hello from server page"})
})
app.get("/data",(req,res)=>{
    return res.status(200).json({
        "store": {
          "name": "Tech Gadgets",
          "location": "123 Tech Avenue, Silicon Valley, CA",
          "products": [
            {
              "id": "101",
              "name": "Wireless Headphones",
              "category": "Audio",
              "price": 129.99,
              "in_stock": true,
              "ratings": {
                "average": 4.5,
                "reviews_count": 150
              },
              "features": [
                "Noise Cancelling",
                "Bluetooth 5.0",
                "20-hour battery life"
              ]
            },
            {
              "id": "102",
              "name": "Smartphone",
              "category": "Mobile",
              "price": 699.99,
              "in_stock": false,
              "ratings": {
                "average": 4.2,
                "reviews_count": 500
              },
              "features": [
                "6.5-inch OLED display",
                "128GB storage",
                "5G connectivity"
              ]
            },
            {
              "id": "103",
              "name": "Laptop",
              "category": "Computers",
              "price": 1199.99,
              "in_stock": true,
              "ratings": {
                "average": 4.8,
                "reviews_count": 300
              },
              "features": [
                "Intel i7 processor",
                "16GB RAM",
                "512GB SSD"
              ]
            }
          ]
        }
      }
      )
})


app.listen(8000,()=>{
    console.log("app is listening at 8000 port");
})
