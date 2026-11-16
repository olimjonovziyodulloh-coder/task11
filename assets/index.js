(function () {
  var e = React.createElement;

  function StudentProfileCard(props) {
    return e('div', { className: 'profile-card' },
      e('div', { className: 'card-header' },
        e('h2', { className: 'student-name' }, props.name),
        e('span', { className: 'student-id' }, 'ID: ' + props.studentId)
      ),
      e('div', { className: 'card-body' },
        e('p', null, e('strong', null, 'Major:'), ' ' + props.major),
        e('p', null, e('strong', null, 'Year:'), ' ' + props.year),
        e('p', null, e('strong', null, 'GPA:'), ' ' + props.gpa)
      )
    );
  }

  function App() {
    return e('div', { className: 'app' },
      e('header', { className: 'page-header' },
        e('p', { className: 'eyebrow' }, 'Task 11-A \u00B7 React Components & Props'),
        e('h1', null, 'Student Directory'),
        e('p', { className: 'subtitle' }, 'Three profile cards rendered from one reusable component.')
      ),
      e('main', { className: 'directory' },
        e(StudentProfileCard, { name: 'Olimjonov Ziyodulloh', studentId: '202537557', major: 'Computer Engineering', year: 2, gpa: 4.4 }),
        e(StudentProfileCard, { name: 'Sudip Sah', studentId: '202637610', major: 'Computer Engineering', year: 1, gpa: 4.2 }),
        e(StudentProfileCard, { name: 'Abdulazizbek Usmonov', studentId: '202537225', major: 'Computer Engineering', year: 2, gpa: 4.3 })
      )
    );
  }

  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(React.StrictMode, null, e(App)));
})();
