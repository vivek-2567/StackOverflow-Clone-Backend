// const _allQuestions = () =>`
//   SELECT
//       ques_id, title, question
//   FROM
//       questions;
// `

const _allData = () => `
  SELECT 
      JSON_ARRAYAGG(
          JSON_OBJECT(
              'ques_id',q.ques_id,
              'title', q.title,
              'question', q.question,
              'answers', (
                  SELECT JSON_ARRAYAGG(
                      JSON_OBJECT(
                          'answer', a.answer,
                          'answer_id', a.ans_id,
                          'comments', (
                              SELECT JSON_ARRAYAGG(
                                  JSON_OBJECT('comment_id',c.comm_id,'comment', c.comment)
                              ) 
                              FROM comments c 
                              WHERE c.ans_id = a.ans_id
                          )
                      )
                  ) 
                  FROM answers a 
                  WHERE a.ques_id = q.ques_id
              )
          )
      ) AS questions_data
  FROM 
      questions q;

`
const _searchQuestions = (keyword) => {
	return `
    SELECT 
        title, question
    FROM
        questions
    WHERE
        question LIKE '%${keyword}%';
`
}

module.exports = {_allData, _searchQuestions}
