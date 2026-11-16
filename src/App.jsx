import StudentProfileCard from './StudentProfileCard'

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <p className="eyebrow">Task 11-A · React Components &amp; Props</p>
        <h1>Student Directory</h1>
        <p className="subtitle">Three profile cards rendered from one reusable component.</p>
      </header>

      <main className="directory">
        <StudentProfileCard
          name="Olimjonov Ziyodulloh"
          studentId="202537557"
          major="Computer Engineering"
          year={2}
          gpa={4.4}
        />
        <StudentProfileCard
          name="Sudip Sah"
          studentId="202637610"
          major="Computer Engineering"
          year={1}
          gpa={4.2}
        />
        <StudentProfileCard
          name="Abdulazizbek Usmonov"
          studentId="202537225"
          major="Computer Engineering"
          year={2}
          gpa={4.3}
        />
      </main>
    </div>
  )
}

export default App
