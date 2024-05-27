const _fetchQuesIdQuery = () => `
 SELECT 
    ques_id
  FROM
    answers
  WHERE
    ans_id = ?
`

const _createCommentQuery = () => `
  INSERT into 
    comments(comm_id, ques_id, username, ans_id, comment)
  VALUES
    (?)
`

const _fetchUsernameCommentQuery = () => `
  SELECT
    username
  FROM
    comments
  WHERE
    comm_id = ? 
`

const _updateCommentQuery = () => `
  UPDATE
    comments
  SET
    comment = ?
  WHERE
    comm_id = ?
`

const _deleteCommentQuery = ()=> `
  DELETE 
  FROM 
    comments 
  WHERE
      comm_id = ?;
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
              comments
          WHERE
              comm_id = ?);
`

module.exports = {_fetchQuesIdQuery, _createCommentQuery, _fetchUsernameCommentQuery, _updateCommentQuery, _deleteCommentQuery, _fetchQuestionOwnerQuery}