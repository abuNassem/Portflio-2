
const Home = () => {
  const imgLinks=[
    {name:'NodeJs_Logo',link:'assets/logoNode.png'},
    {name:'Mongoose_Logo',link:'assets/logoMongoose.svg'},
    {name:'React_Logo',link:'assets/logoReact.webp'},
    {name:'Typescript_Logo',link:'assets/logoTypescrypt.png'},
        {name:'Talwind_Logo',link:'assets/logoTailwind.webp'}

  ]
  return (
    <div id="Hero" className="grid w-full  relative md:h-[100vh] grid-cols-1 md:grid-cols-2  gap-20 md:gap-10">
      <div className="flex mx-auto md:mx-0 flex-col gap-10 w-[90%] md:min-w-[60%] pt-[40px]  justify-start relative">
        <h1 className="title w-[90%] mx-auto sm:w-lg ">I'm <span className="highLight">Qutaibah Mohamed, fullstack developer</span></h1>
      <div className="flex justify-start">
              <p className="description w-md ">Fullstack Developer skilled in React, Tailwind CSS, Material UI, Node.js, Express.js, and MongoDB (Mongoose). Experienced in building end-to-end web applications with focus on performance, usability, and production-ready code.</p>

      </div>
      <div className="flex justify-start gap-5">
        <button onClick={()=>{window.location.hash='Contact'}} className="text-black bg-white duration-[0.5s]  border-zinc-50 hover:bg-white/60  rounded-[30px] btn">Get in touch</button>
             <a href="'/cv.pdf'" download={true} ><button  className="text-white hover:bg-white  duration-[0.5s]  border-zinc-50  rounded-[30px] hover:text-black btn">Download CV</button></a>

      </div>
      </div>
      <div className="h-auto flex flex-col mx-auto md:mx-0  items-center pt-[80px]">
        <div className="w-[200px] animate-pulse h-[200px] overflow-hidden relative bg-white flex justify-center items-center rounded-full">
        <img src="assets/person.png" className="absolute -bottom-5" alt="Person" width={200} height={200}/>
      </div>
      <h2 className="highLight title text-2xl text-center mt-3">Qutaibah Mohamed</h2>
      </div>
      <div className="col-span-1 relative md:col-span-2 mx-auto md:mx-0 flex flex-col items-center gap-10 justify-center">
        <h2 className="text-white text-lg font-[500]">Experience with</h2>
        <div className="flex w-[90%] mx-auto  flex-wrap  items-center justify-center  gap-15 sm:gap-20 ">
          {imgLinks.map((ele,index)=>(
            <img width={40} height={40} className="rounded-full w-[40px] h-[40px] shadow-[2px_8px_10px_black]" src={ele.link} alt={ele.name} key={index}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
