import { FC } from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'C/C++', 'Java', 'SQL', 'JS/TS', 'HTML/CSS']
  },
  {
    name: 'Backend',
    skills: ['Django/Flask/FastAPI', 'Node.js', 'Spring Boot', 'Serverless', 'REST API', 'GraphQL']
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'PyQT', 'Java Swing', 'Flutter']
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Elasticsearch', 'DynamoDB', 'Cassandra']
  },
  {
    name: 'DevOps/Cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Airflow', 'Prometheus', 'Kafka']
  },
  {
    name: 'AI/ML',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'MLFlow', 'LLMs', 'RAG', 'VectorDB']
  }
];


const Skills: FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="neu-card p-6 rounded-corners">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

