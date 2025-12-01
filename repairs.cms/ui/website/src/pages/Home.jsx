import ServicesCard from "../components/home/ServicesCard"
import Slider from "../components/home/Slider"
import SectionHeading from "../components/SectionHeading"
import WebLayout from "../layouts/WebLayout"

const Home = () => {
  return (
    <WebLayout>
      <section>
        <Slider />
      </section>

      <section className="my-5">
        <SectionHeading>
          Services
        </SectionHeading>

        <div className="mx-5">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
            <div className="col-span-4">
              <ServicesCard />
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  )
}

export default Home
