import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'intermediate',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'beginner',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Hunky Dory" />;
}
function Intro() {
  return (
    <div>
      <h1>Hunky Dory Alex</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it over
        2000 years old.
      </p>
    </div>
  );
}
function SkillList() {
  const skillData = skills;
  const numSkills = skillData.length;

  return (
    <div className="skill-list">
      {skillData.map(skill => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* this is better */}
      <span>{level === 'beginner' && '👶'}</span>
      <span>{level === 'intermediate' && '👍'}</span>
      <span>{level === 'advanced' && '💪'}</span>
    </div>
  );
}

// // my solution was a function but ..
// function SkillLevel(level) {
//   if (level === 'advanced') {
//     return '💪';
//   }
//   if (level === 'intermediate') {
//     return '👍';
//   }
//   if (level === 'beginner') {
//     return '👶';
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
