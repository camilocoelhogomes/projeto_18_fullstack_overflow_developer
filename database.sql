DROP DATABASE projeto_18_test;
CREATE DATABASE projeto_18_test;
\c projeto_18_test;

drop table questions cascade;drop table answer cascade;drop table users cascade;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "questions" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"question" varchar(255) NOT NULL,
  "student" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"tags" varchar(255) NOT NULL,
	"submited_at" timestamp with time zone DEFAULT now()::timestamp with time zone NOT NULL,
  "answer" boolean NOT NULL DEFAULT FALSE,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "answer" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"question_id" uuid NOT NULL UNIQUE,
	"answered_by_id" uuid NOT NULL,
	"answer" varchar(255) NOT NULL,
	"answered_at" timestamp with time zone DEFAULT now()::timestamp with time zone NOT NULL,
	CONSTRAINT "answer_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(255) NOT NULL UNIQUE,
	"class" varchar(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "answer" ADD CONSTRAINT "answer_fk0" FOREIGN KEY ("question_id") REFERENCES "questions"("id");
ALTER TABLE "answer" ADD CONSTRAINT "answer_fk1" FOREIGN KEY ("answered_by_id") REFERENCES "users"("id");






