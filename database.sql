DROP DATABASE projeto_18_test;
CREATE DATABASE projeto_18_test;
\c projeto_18_test;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "questions" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"question" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"tags" varchar(255) NOT NULL,
	"submit_at" timestamp with time zone NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "answer" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"question_id" uuid NOT NULL,
	"answered_by_id" uuid NOT NULL,
	"answered_at" varchar(255) NOT NULL,
	"answeredAt_at" timestamp with time zone NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "answer_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "answer" ADD CONSTRAINT "answer_fk0" FOREIGN KEY ("question_id") REFERENCES "questions"("id");
ALTER TABLE "answer" ADD CONSTRAINT "answer_fk1" FOREIGN KEY ("answered_by_id") REFERENCES "user"("id");






