import CardProject from "../component/cardProject"

type ProjectItem = {
  name: string
  img?: string
  link?: string
  status?: string
  description?: string
  stack?: string[]
}

const Project = () => {
  const project: ProjectItem[] = [
    {
      name: 'Memo shop',
      img: '/assets/memo.png',
      link: 'https://memo-shop1.netlify.app/product'
    },
    {
      name: 'Landing page',
      img: '/assets/landingPage.png',
      link: 'https://mynextlandingpage.netlify.app/'
    },
    {
      name: 'Twitter Clone',
      img: '/assets/Screenshot 2026-03-08 100430.png',
      link: 'https://twitter-3nniqjbpq-qutaibas-projects-281fb24a.vercel.app/'
    },
    {
      name: 'POS Management System',
      status: 'In Development',
      description:
        'A point-of-sale system for product management, sales operations, cashier access, and store administration.',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MySQL']
    }
  ]

  return (
    <div id="Projects" className="py-20">
      <h1 className="title text-center">Projects</h1>
      <div className="w-[90%] md:w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-10 mt-20">
        {project.map((ele, index) => (
          <CardProject key={index} {...ele} />
        ))}
      </div>
    </div>
  )
}

export default Project
