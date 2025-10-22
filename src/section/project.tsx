import CardProject from "../component/cardProject"

const Project = () => {
    const project=[{
        name:'Memo shop',
        img:'/src/assets/memoShop.png',
        link:'https://memo-shop1.netlify.app/product'
    },
    {
        name:'Landing page',
        img:'/src/assets/landingPage.png',
        link:'https://mynextlandingpage.netlify.app/'
    }
]
  return (
    <div id="Projects" className="py-20">
      <h1 className="title text-center ">Projects</h1>
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 mt-20 ">
        {project.map((ele,index)=>(
                    <CardProject key={index} {...ele}/>
        ))}
      </div>
    </div>
  )
}

export default Project
