
const Skils = () => {
    const skills = [
        {
            name: 'Next',
            per: 90
        },
        {
            name: 'React',
            per: 95
        },
        {
            name: 'Type script',
            per: 90
        },
        {
            name: 'Redix tolkit',
            per: 95,
        },
        {
            name: 'Tialwind',
            per: 95
        },
        {
            name: 'Express',
            per: 95
        },
        {
            name: 'Mongoose',
            per: 95,
        },
        {
            name: 'Oauth',
            per: 95,
        },
        {
            name: 'Github',
            per: 90,
        },
        {
            name: 'CI CD',
            per: 90
        },
        {
            name: 'test code',
            per: 95
        },
        {
            name: 'Netlify',
            per: 95
        },


        {
            name: 'Render',
            per: 95
        },
        {
            name: 'Vercel',
            per: 95
        }
    ]
    return (
        <div id="Skills" className="py-20">
            <h1 className="title">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 mt-15 px-5">
                {
                    skills.map((ele: { name: string, per: number }, index) => (
                        <div key={index}>
                            <p className="text-1xl text-white font-[500]">{ele.name}</p>
                            <progress className="mt-3" value={ele.per} max={100} />
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Skils
