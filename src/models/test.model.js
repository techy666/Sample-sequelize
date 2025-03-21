import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../lib/db.js";

const Test = sequelize.define("Test", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  metadata: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "[]",
    get() {
      return JSON.parse(this.getDataValue("metadata") || "[]");
    },
    set(value) {
      if (!Array.isArray(value)) throw new Error("Metadata must be an array");
      this.setDataValue("metadata", JSON.stringify(value));
    },
  },
});

export default Test;
