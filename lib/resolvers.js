  const courses = [
    {
      id: 1,
      title: 'Mi titulo',
      teacher: 'Mi profesor',
      description: 'una descripcion',
      topic: 'programcion'
    },
    {
      id: 2,
      title: 'Mi titulo 2',
      teacher: 'Mi profesor',
      description: 'una descripcion',
      topic: 'programcion'
    },
    {
      id: 3,
      title: 'Mi titulo 3',
      teacher: 'Mi profesor',
      description: 'una descripcion',
      topic: 'programcion'
    }
  ]
  
  module.exports = {
    getCourses: () => courses,
    findCourse: ({ id }) => courses.find((u) => u.id === id),
    hello: () => 'Hello world!',
    test: () => {
      return 'Hello world!';
    },
    addCourse({ id, title }){
     let newCourse={
      id: id,
      title: title
     }
     courses.push(newCourse)
     return newCourse
    }
  }