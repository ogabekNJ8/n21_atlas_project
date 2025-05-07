const Author = require("../schemas/Author");
const { sendErrorresponse } = require("../helpers/send_error_response");
const { authorValidation } = require("../validation/author.validation");

const addAuthor = async (req, res) => {
  try {
    const { error, value } = authorValidation(req.body);
    if (error) {
      return sendErrorresponse(error, res);
    }
    // const newAuthor = await Author.create(value); // vaqtincha o'chiq
    const newAuthor = await Author(value);
    res.status(201).send({ message: "New Author added", newAuthor });
  } catch (error) {
    sendErrorresponse(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Author.find();
    res.status(200).send({ data: data });
  } catch (error) {
    sendErrorresponse(error, res);
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    res.status(200).send({ data: author });
  } catch (error) {
    sendErrorresponse(error, res);
  }
};

const update = async (req, res) => {
  try {
    const { error, value } = authorValidation(req.body);
    if (error) {
      return sendErrorresponse(error, res);
    }

    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, value, {
      new: true,
      runValidators: true,
    });

    if (!updatedAuthor) {
      return res.status(404).send({ message: "Author not found" });
    }

    res.status(200).send({ message: "Author updated", data: updatedAuthor });
  } catch (error) {
    sendErrorresponse(error, res);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Author.findByIdAndDelete(id);
    res.status(200).send({ message: "Author deleted successfully" });
  } catch (error) {
    sendErrorresponse(error, res);
  }
};

module.exports = {
  addAuthor,
  findAll,
  findById,
  update,
  remove,
};
