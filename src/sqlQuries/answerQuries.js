const _questionPosterQuery = () => `
  SELECT 
      username
  FROM
      questions
  WHERE
      ques_id = ?;
`

const _createAnswerQuery = () => `
  INSERT INTO
    answers(ans_id, username, ques_id, answer)
  VALUES 
  (?);
`

const _fetchAnswerUserQuery = () => `
  SELECT 
      username
  FROM
      answers
  WHERE
      ans_id = ?;
`

const _updateAnswerQuery = () => `
  UPDATE answers 
  SET 
      answer = ?
  WHERE
      ans_id = ?;
`

const _fetchQuestionOwnerQuery = () => `
  SELECT 
      username
  FROM
      questions
  WHERE
      ques_id = (SELECT 
              ques_id
          FROM
              answers
          WHERE
              ans_id = ?);
`

const _deleteAnswerQuery = () => `
  DELETE FROM 
    answers 
  WHERE
      ans_id = ?;
`

module.exports = {_questionPosterQuery, _createAnswerQuery, _fetchAnswerUserQuery, _updateAnswerQuery, _fetchQuestionOwnerQuery, _deleteAnswerQuery}
