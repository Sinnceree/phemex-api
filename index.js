const PhemexClient = require("./client");

module.exports = { PhemexClient };

const client = new PhemexClient("747080b3-5e06-4e3d-b643-e8e6f9d1ca0f", "W8cwO7Gyu2IgnIs0eI0FPgB0mKVTGicTOFwIoXnIDekzNGU2NGE3Yy01MDg5LTQ1YjgtYjE2My03N2I5NTEzOWU4Yjc");
client.BulkCancelOrders({ symbol: "BTCUSD" }).then((d) => {
  console.log(d)
}).catch(error => console.log(error))