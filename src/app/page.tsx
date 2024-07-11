import Image from "next/image";
import Clucky from "../../public/clucky.png";
import IceCWeiner from "../../public/jell-and-ice-c-weiner.png";
import Chickpea from "../../public/chickpea.png";
import Greb from "../../public/greb.png";
import Jell from "../../public/jell.png";
import Maria from "../../public/maria.png";
import Logo from "../../public/logo.png";
import Volunteer from "@/components/cards/Volunteer";
import Section, {
  SectionType,
  styles as sectionStyles,
} from "@/components/section";
import KeyPoint from "@/components/cards/KeyPoint";
import Impact from "@/components/cards/Impact";
import { Carousel } from "flowbite-react";
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";
import {
  faEarth,
  faPeopleCarry,
  faPercent,
  faPersonCirclePlus,
  faSadCry,
  faShrimp,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="bg-wormWhite text-sockBlack">
      <Header />

      <Section
        type={SectionType.HeroParallax}
        className={`text-white ${sectionStyles.heroBackgroundImage}`}
      >
        <Image
          src={Logo}
          alt="Icon"
          className="mb-8 w-auto h-1/4 sm:h-2/4 md:h-2/4 lg:h-3/4"
        />
        <h1 className="text-4xl font-bold">Welcome to Socks for Cocks</h1>
        <p className="mt-4 text-lg">
          Keeping Alaskan cocks warm one sock at a time
        </p>
      </Section>

      <Section type={SectionType.Plain}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What is Socks for Cocks?</h2>
          <p className="text-lg mb-8">
            Socks for Cocks is an organization dedicated to providing warm socks
            to chickens braving the harsh Alaskan winters. Our mission is to
            ensure every chicken stays warm and healthy, no matter the weather.
            We believe that every chicken deserves comfort and protection, and
            through our efforts, we strive to improve their quality of life
            during the coldest months. Our dedicated team works tirelessly to
            collect, design, and distribute these essential socks to chickens in
            need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <KeyPoint
              icon={faPeopleCarry}
              title="Community Support"
              description="We collaborate with local communities to identify chickens in need and ensure they receive the warmth and protection they deserve."
            />

            <KeyPoint
              icon={faEarth}
              title="Sustainable Practices"
              description="We prioritize eco-friendly materials and practices to minimize our environmental impact and support sustainable farming."
            />

            <KeyPoint
              icon={faPersonCirclePlus}
              title="Volunteer Driven"
              description="Our dedicated volunteers are the backbone of our organization, contributing their time and skills to help chickens in need."
            />

            <KeyPoint
              icon={faSadCry}
              title="Educational Outreach"
              description="We engage with the community to educate them about animal welfare and encourage their involvement in our mission."
            />

            <KeyPoint
              icon={faShrimp}
              title="Innovative Designs"
              description="Our socks are specially designed to provide maximum warmth and comfort, ensuring that each chicken stays cozy even in the harshest conditions."
            />

            <KeyPoint icon={faPercent}>
              <h3 className="text-xl font-semibold mb-2">Complete Coverage</h3>
              <p className="text-lg">
                Our goal is to supply 100% of all Alaskan chickens with warm
                socks. Through relentless dedication and community support, we
                aim to ensure every chicken is protected from the harsh winters.
              </p>

              <div className="mt-2 w-full bg-gray-300 rounded-full h-4">
                <div className="bg-cockRed h-4 rounded-full w-1/3"></div>
              </div>
            </KeyPoint>
          </div>
        </div>
      </Section>

      <Section
        type={SectionType.Parallax}
        className={sectionStyles.impactBackgroundImage}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-wormWhite text-3xl font-bold mb-12">
            Our Impact
          </h2>

          <div>
            <Carousel slideInterval={5000} className="">
              <Impact
                title="Clucky's Transformation"
                impact="Meet Clucky, one of our most endearing success stories. Clucky was found shivering in the bitter cold, her feathers fluffed up in a futile attempt to stay warm. After receiving a pair of our specially designed socks, she began to strut confidently around the coop. Clucky's transformation from a cold, miserable bird to a lively, happy chicken is a testament to the impact of our program. Her new socks have not only provided her with warmth but also a newfound sense of security and well-being."
                imageSrc={Clucky}
              />

              <Impact
                title="Ice C. Weiner's Resilience"
                impact="Ice C. Weiner, aptly named for his resilience against the Alaskan cold, has become a symbol of our mission's success. Before receiving his cozy new socks, Ice C. Weiner struggled to keep warm during the harsh winters, often seeking shelter in the coop for prolonged periods. With the help of our warm, colorful socks, he now spends more time outside, exploring and pecking at the ground with enthusiasm. Ice C. Weiner's story highlights the importance of our work and the difference it makes in the lives of these chickens."
                imageSrc={IceCWeiner}
                imageLeft={true}
              />

              <Impact
                title="Chickpea's Playful Spirit"
                impact="Chickpea, with her bright eyes and inquisitive nature, has thrived since receiving her socks. Before our intervention, Chickpea was often seen huddled in corners, avoiding the biting cold. Now, adorned in her snug and colorful socks, she roams freely and energetically around the farm. Her playful antics and improved health have brought joy not only to her but to all who witness her transformation. Chickpea's journey from a cold, timid bird to a warm, spirited chicken underscores the vital role our organization plays in enhancing the quality of life for these animals."
                imageSrc={Chickpea}
              />
            </Carousel>
          </div>
        </div>
      </Section>

      <Section type={SectionType.Plain}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Volunteers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
            <Volunteer
              name="Jell R. Konyak"
              className="order-2 md:order-1"
              imageSrc={Jell}
              bio="Jell R. Konyak, a devoted volunteer at Socks for Cocks, brings a wealth of compassion and energy to the team. In their 40s, Jell's medium-length blonde hair and warm smile reflect their friendly and approachable nature. Known for their meticulous attention to detail, Jell ensures that every sock donation is of the highest quality, providing maximum warmth and comfort to the chickens. Their background in community service and dedication to animal welfare makes Jell an invaluable asset to the organization, always going above and beyond to support the mission."
              facts={{
                type: "Dark Jell Facts",
                list: [
                  "Secretly plans to create an army of super chickens to take over the world.",
                  "Conducts midnight experiments to develop indestructible chicken socks.",
                  "Has a hidden lair where they train chickens in the art of espionage.",
                ],
              }}
            />

            <Volunteer
              name="Greb Markon"
              className="order-1 md:order-2"
              imageSrc={Greb}
              isOpen={true}
              bio="Greb Markon, the founder of Socks for Cocks, is a passionate advocate for animal welfare. In his 30s, Greb is known for his unwavering dedication to keeping Alaskan chickens warm during the harsh winters. With short brown hair and a pair of glasses that highlight his bright, caring eyes, Greb's enthusiasm for his mission is contagious. His innovative idea of providing colorful, cozy socks to chickens has not only garnered community support but also inspired many to contribute to the cause. Greb’s leadership and commitment continue to drive the success of Socks for Cocks."
              facts={{
                type: "Fun Facts",
                list: [
                  "Has a degree in veterinary science.",
                  "Enjoys painting landscapes during his free time.",
                  "Runs a blog about sustainable farming practices.",
                ],
              }}
            />

            <Volunteer
              name="Maria Nargon"
              imageSrc={Maria}
              className="order-3"
              bio="Maria Nargon, a vibrant and cheerful volunteer in her 30s, is a cornerstone of the Socks for Cocks team. With long brown hair and a bright smile, Maria’s warmth and friendliness make her a favorite among both the volunteers and the chickens they care for. Her background in environmental science and her deep love for animals drive her dedication to the cause. Maria’s efforts in outreach and education help spread the word about the importance of animal welfare, ensuring that more chickens receive the warmth and protection they need during Alaska's freezing winters."
              facts={{
                type: "Fun Facts",
                list: [
                  "Loves hiking and exploring Alaskan wilderness.",
                  "Has a pet chicken named Clucky who inspired her to join the cause.",
                  "Enjoys knitting and often makes custom socks for the chickens.",
                ],
              }}
            />
          </div>
        </div>
      </Section>

      <Section
        type={SectionType.HeroParallax}
        className={sectionStyles.contactBackgroundImage}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-wormWhite font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-wormWhite">
            We&apos;d love to hear from you! Whether you have questions, want to
            volunteer, or are looking to donate, please reach out.
          </p>
          <form action="/" method="POST" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg mt-4"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
