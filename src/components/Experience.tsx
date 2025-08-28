import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Tech Company Inc.',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Led a team of 5 developers in building a scalable e-commerce platform',
        'Implemented microservices architecture resulting in 40% performance improvement',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product managers and designers to deliver user-centric solutions'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2023 - 2024',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Optimized database queries reducing load times by 60%',
        'Implemented automated testing procedures increasing code coverage to 85%',
        'Worked closely with UI/UX designers to implement responsive designs'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Docker', 'Jest']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Innovations',
      location: 'San Francisco, CA',
      period: '2024 - 2024',
      description: [
        'Built RESTful APIs and integrated third-party services',
        'Participated in agile development processes and daily standups',
        'Contributed to open-source projects and internal tools',
        'Gained experience in cloud deployment and DevOps practices'
      ],
      technologies: ['Python', 'Django', 'React', 'MySQL', 'Git']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the impact I&apos;ve made
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
