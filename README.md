<img src="https://socialify.git.ci/vivek-2567/StackOverflow-Clone-Backend/image?font=Rokkitt&name=1&owner=1&pattern=Signal&theme=Dark" alt="StackOverflow-Clone-Backend" width="640" height="320" />

# StackOverflow Clone Backend

Welcome to the StackOverflow Clone Backend repository! This project aims to replicate the core functionalities of the popular Q&A platform, StackOverflow, providing a robust backend service to support user authentication, question, answer and comments management and more. Built with scalability and performance in mind, this backend is designed to handle a large volume of users and interactions seamlessly.



## Features

- User Authentication & Authorization
    - Secure user registration, login and deletion
    - JWT-based authentication
- Question Management
    - Create, read, update, and delete questions
    - Search and filter questions
    - Anyone with an account can add a Question
    - Anyone with or without account can view or search in Questions
    - A user can view all its questions
- Answer Management
    - Create, read, update, and delete questions
    - Creater of the question can not answer the question
    - One question may have multiple answers
    - To view answers of a particular question
- Comment Management
    - Create, read, update, and delete Comments
    - View all the comments related to a question
    - Anyone can create a comment
    - One answer can have multiple comments


## API Reference

#### Homepage

```api
  GET /api
```
Tells whether the backend is running. It gives a normal html page as output with some content in H1 tag.

#### Get all Questions

```api
  GET /api/open/all
```
Get all the Questions, Answers and related comments.

#### Get all Questions by a User

```api
  GET /api/user/all
```
Get all the Questions asked by a user.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

#### Get all Questions by a User

```api
  GET /api/user/all
```
Get all details of a question.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`registerDetails`:

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `quesId`      | `string` | **Required**. Question Id |

}

#### Register User

```api
  POST /api/user/register
```
Register a new user.

The following parameters in {`registerDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Unique Username |
| `name`      | `string` | **Required**. Name of the user |
| `password`      | `string` | **Required**. Password for the account |
| `email`      | `string` | **Required**. Unique email address of the user |
| `phone`      | `number` | **Required**. Unique Contact No. of the user |

}

#### Login User

```api
  POST /api/user/login
```

The following parameters in {`loginData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Username of the account |
| `password`      | `string` | **Required**. Password for the account |

}

#### Update User

```api
  PATCH /api/user/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`userDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. New/Old Username |
| `password`      | `string` | **Required**. New Password |

}

#### Delete User

```api
  DELETE /api/user/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |



#### Create Question

```api
  POST /api/question/post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`questionData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Unique Title |
| `question`      | `string` | **Required**. Description of the question |

}


#### Update Questions

```api
  PATCH /api/question/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`questionData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Unique Title |
| `question`      | `string` | **Required**. Description of the question |

}

#### Delete Question

```api
  DELETE /api/question/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |


The following parameters in {`deleteDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ques_id`      | `string` | **Required**. Question ID |


}


#### Create Answers

```api
  POST /api/question/post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`answerDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ques_id`      | `string` | **Required**. Question ID |
| `answer`      | `string` | **Required**. Answer |

}


#### Update Answers

```api
  PATCH /api/answer/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`answerDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ans_id`      | `string` | **Required**. Answer ID |
| `answer`      | `string` | **Required**. Answer |

}

#### Delete Answer

```api
  DELETE /api/answer/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`deleteData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ans_id`      | `string` | **Required**. Answer ID |

}


#### Create Comments

```api
  POST /api/comment/post
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`commentDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ans_id`      | `string` | **Required**. Answer ID |
| `comment`      | `string` | **Required**. Comment |

}


#### Update Comments

```api
  PATCH /api/comment/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`commentDetails`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `comm_id`      | `string` | **Required**. Comment ID |
| `comment`      | `string` | **Required**. Comment |

}

#### Delete Comment

```api
  DELETE /api/comment/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token`      | `string` | **Required**. Bearer Token of a user |

The following parameters in {`deleteData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `comm_id`      | `string` | **Required**. Comment ID |

}


#### Search Questions

```api
  POST /api/open/search
```


The following parameters in {`searchData`:
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. word to search |

}
## Run Locally

Clone the project

```bash
  git clone https://github.com/vivek-2567/StackOverflow-Clone-Backend.git
```

After cloning the repository, make a SQL Database where we will have 4 different tables. We will also have to make triggers for updating the updated_on data column in after any update in a row in a table. 

- Answers
    ```sql
    CREATE TABLE `answers` (
        `ans_id` varchar(36) NOT NULL,
        `username` varchar(255) NOT NULL,
        `ques_id` varchar(36) NOT NULL,
        `answer` varchar(512) NOT NULL,
        `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`ans_id`)
    ) 
    ```

    ```sql
    DELIMITER //

    CREATE TRIGGER add_timestamp_before_update_ans
    BEFORE UPDATE ON answers
    FOR EACH ROW
    BEGIN
        SET NEW.updated_on = NOW();
    END;

    //

    DELIMITER ;
    ```
- Comments
    ```sql
    CREATE TABLE `comments` (
        `comm_id` varchar(36) NOT NULL,
        `ques_id` varchar(36) NOT NULL,
        `username` varchar(255) NOT NULL,
        `ans_id` varchar(36) NOT NULL,
        `comment` varchar(512) NOT NULL,
        `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`comm_id`)
    )
    ```

    ```sql
    DELIMITER //

    CREATE TRIGGER add_timestamp_before_update_comm
    BEFORE UPDATE ON comments
    FOR EACH ROW
    BEGIN
        SET NEW.updated_on = NOW();
    END;

    //

    DELIMITER ;
    ```
- Questions

    ```sql
    CREATE TABLE `questions` (
        `ques_id` varchar(36) NOT NULL,
        `username` varchar(255) NOT NULL,
        `title` varchar(255) NOT NULL,
        `question` varchar(512) NOT NULL,
        `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`ques_id`)
    )
    ```

    ```sql
    DELIMITER //

    CREATE TRIGGER add_timestamp_before_update_ques
    BEFORE UPDATE ON questions
    FOR EACH ROW
    BEGIN
        SET NEW.updated_on = NOW();
    END;

    //

    DELIMITER ;
    ```
- Users

    ```sql
    CREATE TABLE `users` (
        `username` varchar(255) NOT NULL,
        `name` varchar(255) DEFAULT NULL,
        `password` varchar(255) DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL,
        `phone` varchar(45) DEFAULT NULL,
        `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`username`)
    )
    ```

    ```sql
    DELIMITER //

    CREATE TRIGGER add_timestamp_before_update_users
    BEFORE UPDATE ON users
    FOR EACH ROW
    BEGIN
        SET NEW.updated_on = NOW();
    END;

    //

    DELIMITER ;
    ```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`HOST` Host of the SQL Database

`DB_USER` Username of the SQL Database

`DB_DATABASE` Database name of the SQL Database

`KEY` Key for generating JWT token.
## Authors

- [@vivekgoel](https://github.com/vivek-2567)

