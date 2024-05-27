require("dotenv").config();
const jwt = require("jsonwebtoken");

const { sqlQuery } = require("../utils/db");
const { sendResponse } = require("../utils/responseSend");
const {
  _fetchUsernameQuery,
  _deleteUser,
  _ifUsernameExistsQuery,
  _updateUserDetailsQuery,
  _regitserUserQuery,
  _fetchAllUserQuestions,
} = require("../sqlQuries/userQuries");
const { CustomError } = require("../utils/errorHandler");
const { comparePassword } = require("../utils/compare_passwords");
const { hashPass } = require("../utils/hash_password");
const { makeToken } = require("../utils/jwtOperations");

async function loginUser(request, response, next) {
  const loginData = request.body.loginData;

  try {
    const fetchUsernameResponse = await sqlQuery(_fetchUsernameQuery(), [
      loginData.username,
    ]);

    if (fetchUsernameResponse.length === 0) {
      throw new CustomError("User not found", 404);
    }

    if (fetchUsernameResponse[0].password === null) {
      throw new CustomError("User Deleted", 401);
    }

    if (
      (await comparePassword(
        loginData.password,
        fetchUsernameResponse[0].password
      )) === false
    ) {
      throw new CustomError("Passwords don't match");
    }

    const token = makeToken(loginData.username)
    // jwt.sign(loginData.username, process.env.KEY);

    sendResponse(response, 200, { message: "Token Generated", token: token });
  } catch (error) {
    next(error);
  }
}

async function registerUser(request, response, next) {
  try {
    const { username, name, password, email, phone } =
      request.body.registerUser;
    const userQueryResult = await sqlQuery(_ifUsernameExistsQuery(), username);
    if (!userQueryResult.length === 0) {
      throw new CustomError("User already exists", 400);
    }

    const hashedPassword = await hashPass(password);
    await sqlQuery(_regitserUserQuery(), [
      [username, name, hashedPassword, email, phone],
    ]);

    sendResponse(response, 200, { message: "User Created" });
  } catch (error) {
    next(error);
  }
}

async function allUserQuestions(request, response, next) {
  try {
    const allQuesResponse = await sqlQuery(_fetchAllUserQuestions(), [
      request.username,
    ]);

    if (allQuesResponse.length === 0) {
      throw new CustomError("No questions by User", 200);
    }

    sendResponse(response, 200, { result: allQuesResponse });
  } catch (error) {
    next(error);
  }
}

async function updateUserDetails(request, response, next) {
  const userDetails = request.body.userDetails;

  try {
    if (request.username != userDetails.username) {
      throw new CustomError("Cannot update other user Deatils", 401);
    }

    for (let i = 0; i < Object.keys(userDetails).length; i++) {
      let key = Object.keys(userDetails)[i];
      if (key === "password") {
        const hashedPassword = await hashPass(userDetails[key]);
        await sqlQuery(_updateUserDetailsQuery(), [
          key,
          hashedPassword,
          request.username,
        ]);
      } else if (key !== "username") {
        await sqlQuery(_updateUserDetailsQuery(), [
          key,
          userDetails[key],
          request.username,
        ]);
      }
    }

    sendResponse(response, 200, {
      message: "User details Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    await sqlQuery(_deleteUser(), [request.username]);
    sendResponse(response, 200, { message: "User Deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginUser,
  registerUser,
  allUserQuestions,
  updateUserDetails,
  deleteUser,
};
