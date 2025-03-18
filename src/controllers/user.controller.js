import asyncHandler from "../utils/asyncHandler.js";

export const getUser = asyncHandler(async (req, res) => {
  console.log("User details fetched successfully");
});

export const createUser = asyncHandler(async (req, res) => {
  console.log("User created successfully");
});

export const updateUser = asyncHandler(async (req, res) => {
  console.log("User details updated");
});

export const deleteUser = asyncHandler(async (req, res) => {
  console.log("User deleted");
});
