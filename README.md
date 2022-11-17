# graphql1

0. npm i nodemon -D
1. se agrego script "dev": "nodemon -e js,graphql server",
2. npm run dev
3. examples

mutations

mutation {
  addCourse(id:"4",title:"hope is a good thing"){
    id
  }
}


query

{
  getCourses {
    id
    title
    teacher
    description
    topic
  }
  findCourse(id: 1) {
    id
    title
    teacher
    description
    topic
  },
  hello
}
