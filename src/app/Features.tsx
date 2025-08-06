import { title } from "process";

const features = [
    {title:"Easy Setup",description:"Install And Run in Seconds "},
     {title:"Modern Design",description:"Clean UI with great UX "},
      {title:"Fast And Lightweight",description:"Optimized For Performance "},
];





const Features = () => {
    return(<section className="py-16 px-16 md:px-20 bg-gray-200 "data-aos="fade-up ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{features.map((feature,index)=>(<div  key ={index} className="bg-white p-6 rounded-md shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
         <p className="text-gray-700">{feature.description}</p>
         </div>
        ))}
        </div>
    </section>);
}
export default Features