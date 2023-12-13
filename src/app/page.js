import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders"



const Home = () => {
  return (
    <>
      <Hero />
      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About Us'} />

        <div className="text-gray-500 max-w-md mx-auto mt-8 flex flex-col gap-4">
          <p className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum rem temporibus magni possimus illo velit sapiente minus alias nemo sunt placeat, soluta pariatur distinctio repudiandae dolorum, amet culpa qui?</p>
          <p className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum rem temporibus magni possimus illo velit sapiente minus alias nemo sunt placeat, soluta pariatur distinctio repudiandae dolorum, amet culpa qui?</p>
          <p className=" ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum rem temporibus magni possimus illo velit sapiente minus alias nemo sunt placeat, soluta pariatur distinctio repudiandae dolorum, amet culpa qui?</p>
        </div>

      </section>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Don/'t hesitate"} mainHeader={'Contact Us'} />

        <div className=" mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+8801764613220">+8801764613220</a>
        </div>

      </section>
     
    </>
  )
}

export default Home