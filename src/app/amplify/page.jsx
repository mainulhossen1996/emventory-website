
import { Hero } from '@/components/Amplify/Hero';
import Navbar from '@/components/Amplify/Navbar';


// const page = () => {
//   return (
//     <div className="bg-[#030712] text-white font-sans selection:bg-blue-700 selection:text-white antialiased">
//      <Navbar/>
//      <div className="pt-[72px]">
//      <section id="hero" className="scroll-mt-[72px]">
//       <Hero />
//       </section>
//       </div>
//     </div>
//   );
// };

const page = () => {
    return (
      <div className="bg-[#030712] text-white font-sans selection:bg-blue-700 selection:text-white antialiased">
        <Hero />
      </div>
    );
  };

export default page;