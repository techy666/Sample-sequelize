import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();

  users.map((user) => console.log(user.dataValues));
  res.send("Records fetched successfully");
});

export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName } = req.body;
  const name = User.build({ firstName, lastName });
  const record = await name.save();

  console.log("Record added successfully");
  res.send("Record added successfully");
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const [results, metadata] = await sequelize.query(
    `UPDATE Users SET firstName = :firstName, lastName = :lastName WHERE id = :${id}`,
    {
      replacements: { firstName, lastName, id },
      type: sequelize.QueryTypes.UPDATE,
    }
  );

  if (metadata.rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User updated successfully" });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
});
