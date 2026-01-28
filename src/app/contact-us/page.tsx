import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 ">
      <section id="contact" className="py-2">
        <div className="container px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-cyan-500">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-cyan-500 mb-10">
            Open to full-time remote roles, freelance, or collaborations –
            especially with US-based teams.
          </p>
          <div className="grid sm:grid-cols-3 justify-center md:mx-36 gap-6 mb-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-amber-400"
            >
              <Link href="https://github.com/Sana-Farasat" target="_blank">
                <FaGithub className="mr-2 " /> GitHub
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-primary bg-green-600">
              <Link href="mailto:sanafarasat786@gmail.com">
                <IoMail className="mr-2" /> Hire Me
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary bg-blue-600"
            >
              <Link
                href="https://www.linkedin.com/in/sana-farasat-b438a22b9/"
                target="_blank"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
