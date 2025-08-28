export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;m a passionate software developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                With over three years of experience in software development, I&apos;ve had the
                opportunity to work on diverse projects ranging from web applications to
                mobile apps and enterprise solutions.
              </p>
              <p>
                I&apos;m passionate about writing clean, efficient code and staying up-to-date
                with the latest technologies and best practices. My goal is to create
                solutions that not only meet technical requirements but also provide
                exceptional user experiences.
              </p>
              <p>
                When I&apos;m not coding, you can find me contributing to open-source projects,
                learning new technologies, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Do
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building complete web applications from frontend to backend with modern technologies.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  System Architecture
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing scalable and maintainable system architectures for complex applications.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Team Leadership
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Leading development teams and mentoring junior developers to achieve project goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
