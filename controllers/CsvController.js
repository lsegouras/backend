import csvSchema from "../models/CsvModel.js";

const getCsv = async (req, res) => {
  try {
    const data = await csvSchema.find({});
    res.send(data);
  } catch (err) {
    throw err;
  }
};

const createCsv = async (req, res) => {
  try {
    const newCsv = new csvSchema(req.body);

    const savedCsv = await newCsv.save();

    res.status(201).json({
      statusCode: 201,
      message: "CSV adicionado com sucesso",
      data: {
        savedCsv,
      },
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
};

export default {
  getCsv,
  createCsv,
};
