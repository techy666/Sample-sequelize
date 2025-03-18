import { DataTypes } from "sequelize";
import db from "../lib/db.js";

const User = db.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);

export default User;
