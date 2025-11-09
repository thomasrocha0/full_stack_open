let idCounter = 0
const Course = ({course}) => (
  <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </>
)

const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={idCounter++} part={part}/>)}
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>

export default Course