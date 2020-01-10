export const config = {
  "dev": {
    "username": "udagram1",
    "password": "udagram1",
    "database": "udagram1",
    "host": "udagram1.cdkpg8idgzad.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-learn-bucket"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret" : process.env.SECRET
  }
}
