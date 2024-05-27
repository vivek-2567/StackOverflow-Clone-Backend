const _createQuestion = () =>`
  INSERT INTO
    questions(ques_id, username, title, question)
  VALUES
    (?)
`

const _findUsernameQuery = () => `
  SELECT 
    username
FROM
    questions
WHERE
    ques_id = ?;
`

const _updateQuesitonQuery = () => `
  UPDATE questions
  SET 
      ?? = ?
  WHERE
      ques_id = ?;
`

const _fetchUsernameForDeleteQuery = () =>`
  SELECT 
      username
  FROM
      questions
  WHERE
      ques_id = ?;
`

const _deleteQuestionQuery = () => `
  DELETE FROM 
      questions 
  WHERE
      ques_id = ?;
`

module.exports = {_createQuestion , _findUsernameQuery, _updateQuesitonQuery, _fetchUsernameForDeleteQuery, _deleteQuestionQuery}