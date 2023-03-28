const express = require("express");
const app = express();
const AWS = require("aws-sdk");

const dotenv = require("dotenv");
dotenv.config();

const accessKey = process.env.ACCESS_KEY_ID;
const secretKey = process.env.SECRET_KEY;

AWS.config.update({
  region: "us-east-2",
  // accessKeyId: accessKey,
  // secretAccessKey: secretKey,
});

const sns = new AWS.SNS();
const SNS_TOPIC_ARN = "<ARN>";
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "registro-productos";
const PORT = process.env.PORT || 8080;
app.use(express.json());

async function scanDynamoRecords(scanParams) {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise();
    const items = dynamoData.Items;
    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
      dynamoData = await dynamodb.scan(scanParams).promise();
      items.push(...dynamoData.Items);
    }
    return items;
  } catch (error) {
    throw new Error(error);
  }
}

app.get("/", (req, res) => {
  res.send("Test API");
});

app.get("/products", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const productos = await scanDynamoRecords(params);
    res.json(productos);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/products", (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Item: req.body,
  };

  dynamodb
    .put(params)
    .promise()
    .then(() => {
      console.log("Registro Guardado");
      const prod = JSON.stringify(req.body);
      return sns
        .publish({
          Message: `Nuevo producto agregado ${prod}`,
          Subject: "Nuevo Producto",
          TopicArn: SNS_TOPIC_ARN,
        })
        .promise()
        .then((data) => {
          console.log("Notificacion enviada");
          console.log(data);
          const response = {
            Operation: "SAVE",
            Message: "SUCCESS",
            Item: req.body,
          };
          res.json(response);
        });
    });
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

server.on("error", (err) => console.log(err));