
const Skils = () => {
    const skills=[
        {
            name:'React',
            per:90
        },
        {
            name:'Type script',
            per:85
        },
        {
            name:'Redix tolkit',
            per:90,
        },
        {
 name:'Tialwind',
        per:90
        },
        {
            name:'Express',
            per:80
        },
        {
            name:'Mongoose',
            per:85,
        },
        {
            name:'Oauth',
            per:85,
        },
        {
            name:'Github',
            per:90,
        },
        {
            name:'Netlify',
            per:90
        },
        {
            name:'Render',
            per:90
        },
        {
            name:'Vercel',
            per:90
        }
       
    ]
  return (
    <div id="Skills" className="py-20">
      <h1 className="title">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 mt-15 px-5">
        {
            skills.map((ele:{name:string,per:number},index)=>(
                <div key={index}>
<p className="text-1xl text-white font-[500]">{ele.name}</p>
        <progress className="mt-3" value={ele.per} max={100}/>
                </div>
                
            ))
        }
        
      </div>
    </div>
  )
}

export default Skils
