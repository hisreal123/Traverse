"üse client";

import NAVLINKS from "@/utils/navlinks";
import Link from "next/link";
import Image from "next/image";

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
          <Link
            href="/auth/signup"
            className="rounded-lg shadow shadow-xs bg-purple-900 text-white px-5 py-3 hover:bg-white hover:border hover:border-purple-900/50 hover:text-purple-600"
          >
            Signup as User
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
        <Link href="/auth/signup">Looking for a new career? Get in touch</Link>
      </div>
    </nav>
  );
};
