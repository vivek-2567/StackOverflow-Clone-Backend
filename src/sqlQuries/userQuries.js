const _ifUsernameExistsQuery= () => `
  SELECT 
      username
  FROM
      users
  WHERE
      username = ?
`

const _regitserUserQuery = () => `
  INSERT INTO
    users (username, name, password, email, phone)
  VALUES
    (?)
`

const _fetchUsernameQuery = () => `
  SELECT 
      username, password
  FROM
      users
  WHERE
      username = ?;
`

const _fetchAllUserQuestions = ()=> `
  SELECT 
      ques_id AS QuestionID,
      username,
      title,
      question,
      created_on AS CreatedOn
  FROM
      questions
  WHERE
      username = ?;
`

const _updateUserDetailsQuery = ()=>`
UPDATE 
    users
SET ?? = ?
    WHERE username = ?
`

const _deleteUser = () =>`
  UPDATE users 
  SET 
      name = NULL,
      password = NULL,
      email = NULL,
      phone = NULL
  WHERE
      username = ?;
`

module.exports = {
  _ifUsernameExistsQuery,
  _regitserUserQuery,
  _fetchUsernameQuery,
  _fetchAllUserQuestions,
  _updateUserDetailsQuery,
  _deleteUser
}