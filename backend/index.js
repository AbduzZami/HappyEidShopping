const express = require("express");
const cors = require("cors");
const arongPanjabi = require("./routes/panjabi/arong_panjabi.js");
const bataMenShoe = require("./routes/shoe_men/bata_shoe_men.js");
const bataWomenShoe = require("./routes/shoe_women/bata_shoe_women.js");
const arongPajama = require("./routes/pajama/arong_pajama.js");
const arongSharee = require("./routes/sharee/arong_sharee.js");
const arongShalwar = require("./routes/shalwar/arong_shalwar.js");

const catseyePanjabi = require("./routes/panjabi/catseye_panjabi.js");
const yellowPanjabi = require("./routes/panjabi/yellow_panjabi.js");

const yellowsharee = require("./routes/sharee/yellow_sharee.js");
const yellowshalwar = require("./routes/shalwar/yellow_shalwar.js");
const yellowpajama = require("./routes/pajama/yellow_pajama.js");

const apexMenShoe = require("./routes/shoe_men/apex_shoe_men.js");
const apexWomenShoe = require("./routes/shoe_women/apex_show_women.js");

const app = express();
const port = 8800;
app.use(cors());

app.use("/panjabi/arong", arongPanjabi);
app.use("/pajama/arong", arongPajama);
app.use("/sharee/arong", arongSharee);
app.use("/shoemen/bata", bataMenShoe);
app.use("/shoewomen/bata", bataWomenShoe);
app.use("/shalwar/arong", arongShalwar);
app.use("/panjabi/catseye", catseyePanjabi);
app.use("/panjabi/yellow", yellowPanjabi);
app.use("/sharee/yellow", yellowsharee);
app.use("/shalwar/yellow", yellowshalwar);
app.use("/pajama/yellow", yellowpajama);
app.use("/shoemen/apex", apexMenShoe);
app.use("/shoewomen/apex", apexWomenShoe);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
