import NAVLINKS from "@/utils/navlinks";
import Image from "next/image";
import Link from "next/link";
import { RevolutionData1, RevolutionData2, Aboutdata } from "@/utils/data";

const page = () => {
  return (
    <div className="bg-white ">
      <Nav />
      <HeroSection />
      <Services />
      <About />
      <Stories />
      <section className="bg-purple-950 py-14 md:px-16 px-5 md:py-20">
        <div className="flex justify-center">
          <Image
            src="/assets/Traverse.png"
            alt="traverse logo"
            className="bg-purple-50"
            width={200}
            height={200}
          />
        </div>
        <div
          className="flex justify-center gap-4 text-white text-sm md:text-base font-semibold text-center
         py-7"
        >
          <Link href="/">Home</Link>
          <Link href="/about us">About Us</Link>
          <Link href="/requestBeta">Request Beta</Link>
        </div>
        <hr />
        <div className="flex items-center text-white text-sm md:text-base font-normal justify-between py-2">
          <h1>
            &copy; {new Date().getFullYear()} Project. All rights reserved.
          </h1>
          <div className="flex items-center gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

export const Nav = () => {
  return (
    <nav>
      <header className="md:flex justify-between items-center py-3 md:px-16 px-5">
        <div>
          <Image
            src="/assets/Traverse.png"
            alt="traverse logo"
            width={150}
            height={150}
          />
        </div>
        <div className="md:text-base text-xs font-semibold flex items-center justify-between md:gap-4">
          <button className="text-purple-600 bg-purple-50 px-5 py-3 hover:bg-purple-600 hover:text-purple-50 border border-[#ECEBFF] rounded-lg">
            Client Access
          </button>
          <Link href="/auth/signup">
            <button className="rounded-lg shadow shadow-xs bg-purple-900 text-white px-5 py-3 hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600">
              Signup as User
            </button>
          </Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row gap-2 lg:gap-20 border-t-2 py-8 md:px-16 px-5">
        {NAVLINKS.map((item) => (
          <Link
            href={item.link}
            className="flex items-center gap-2 hover:bg-purple-50 px-2 py-3 rounded-lg"
            key={item.title}
          >
            <Image
              src="/assets/strongbox.svg"
              alt="link icon"
              width={40}
              height={40}
            />
            <div>
              <h4 className="text-sm md:text-base font-semibold text-purple-900">
                {item.title}
              </h4>
              <p className="text-[12px] md:text-sm font-normal tracking-[-0.1px] text-[#6B7B8F]">
                {item.descText}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-purple-50 text-center py-4">
        <Link href="#">Looking for a new career? Get in touch</Link>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <>
      <section className="py-14 md:py-28 flex flex-col items-center justify-center text-[#6B7B8F]">
        <h1 className="text-center text-balance md:leading-[68px] text-4xl md:text-[64px] font-bold text-purple-950 pb-6">
          Welcome to Traverse - Your <br />
          Ultimate Time Tracking <br /> Companion!
        </h1>
        <p className="text-center md:text-lg text-sm text-[#6B7B8F] md:w-[42%] pb-9">
          Maximize productivity with our intuitive time tracking app. Traverse
          empowers you to effortlessly manage your project hours, track app and
          web usage, and seamlessly sync data, even when offline.
        </p>
        <Link
          href="#"
          className="rounded-lg shadow shadow-xs bg-purple-900 text-white px-5 py-3 hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 md:text-base text-xs "
        >
          Get Started
        </Link>
      </section>
      <div className="flex items-center justify-center px-5 md:px-0 pb-14 md:pb-28">
        <Image
          src="/assets/HeroImage.png"
          alt="Hero Image"
          width={1200}
          height={700}
        />
      </div>
    </>
  );
};

const Services = () => {
  return (
    <section className="lg:flex py-14 md:px-16 px-5 md:py-28 justify-between">
      <div>
        <header className="text-black text-base font-bold pb-4">
          Services
        </header>
        <h2 className="text-3xl md:text-[52px] md:leading-[60px] font-bold text-purple-950 pb-6 lg:w-[380px]">
          Revolutionize Your Workflow with Traverse Time Tracking
        </h2>
        <p className="text-neutraly text-balance text-sm md:text-base">
          At Traverse, we go beyond traditional time tracking. We&lsquo;re your
          dedicated partner in maximizing productivity, ensuring accurate time
          management, and providing valuable insights to elevate your workflow.
        </p>
      </div>
      <div className="md:flex lg:pl-10 lg:gap-5">
        <div className="flex flex-col gap-14">
          {RevolutionData1.map((items) => (
            <div key={items.title}>
              <Image
                src="/assets/strongbox.svg"
                alt="link icon"
                width={40}
                height={40}
              />
              <h1 className="text-xl md:text-2xl text-purple-950 py-4 font-bold">
                {items.title}
              </h1>
              <p className="text-balance text-neutraly text-sm md:text-base">
                {items.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-20">
          {RevolutionData2.map((items) => (
            <div key={items.title}>
              <Image
                src="/assets/strongbox.svg"
                alt="link icon"
                width={40}
                height={40}
              />
              <h1 className="text-xl md:text-2xl text-purple-950 py-4 font-bold">
                {items.title}
              </h1>
              <p className="text-balance text-neutraly text-sm md:text-base">
                {items.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="md:flex py-14 md:px-16 px-5 md:py-28">
      <div>
        <header className="text-base text-purple-950 font-semibold">
          About
        </header>
        <h1 className="text-3xl md:text-5xl text-purple-950 py-4 font-bold">
          Elevating Productivity with Traverse
        </h1>
        <p className="font-normal text-neutraly text-sm md:text-lg md:w-[80%]">
          Welcome to Traverse—your partner in maximizing every moment. We
          understand the intricate dance of managing time and tasks, and
          we&apos;re here to revolutionize your approach to time tracking.
        </p>
        <div className="flex flex-col gap-4">
          {Aboutdata.map((items) => (
            <div key={items[0]} className="flex items-center gap-2 w-[85%]">
              <Image
                src="/assets/strongbox.svg"
                alt="link icon"
                width={40}
                height={40}
              />
              <p className="text-neutraly text-sm md:text-base">{items}</p>
            </div>
          ))}
        </div>
        <button className="text-purple-600 my-11 bg-purple-50 px-5 py-3 hover:bg-purple-600 hover:text-purple-50 border border-[#ECEBFF] rounded-lg">
          Learn More
        </button>
      </div>
      <div>
        <Image
          src="/assets/aboutImage.png"
          alt="Abut image"
          width={900}
          height={640}
        />
      </div>
    </section>
  );
};

const Stories = () => {
  return (
    <section className="bg-[#ECEBFF] py-14 md:px-16 px-5 md:py-28">
      <div className="text-center">
        <header className="text-sm md:text-base pb-4 font-semibold">
          Customer Stories
        </header>
        <h2 className="text-3xl md:text-5xl font-bold pb-14 md:pb-20">
          Don&apos;t just take our word for it
        </h2>
      </div>
      <div className="lg:flex items-center gap-16">
        <Image
          src="/assets/testimonial.png"
          alt="testimonial"
          width={616}
          height={640}
        />
        <div>
          <Image
            src="/assets/Stars.png"
            alt="stars"
            className="py-6"
            width={150}
            height={150}
          />
          <div>
            <p className="text-lg text-purple-950 md:text-2xl font-bold">
              &quot;A testimonial that shares a customer&apos;s positive
              experience with your company and answers potential customer
              doubts. Showcase testimonials from a similar demographic to your
              customers.&quot;
            </p>
            <div>
              <h5 className="text-black text-sm font-semibold md:text-base ">
                Jackson Jackson
              </h5>
              <p className="text-black text-sm font-normal md:text-base">
                Starter House Co.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
