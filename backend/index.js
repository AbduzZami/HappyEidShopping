const express = require("express");
const cors = require("cors");
const arongPanjabi = require("./routes/panjabi/arong_panjabi.js");

const app = express();
const port = 8800;
app.use(cors());

app.use("/panjabi/arong", arongPanjabi);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
