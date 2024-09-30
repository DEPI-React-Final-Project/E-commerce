import FooterLinks from "../ui/FooterLinks";
import Logo from "../ui/Logo";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import RightCopyFooter from "./RightCopyFooter";

function Footer() {
  return (
    <>
      <footer className="container grid grid-row-2 md:flex my-12 gap-10 md:gap-0">
        <div className="space-y-4 md:space-y-10 md:w-1/3">
          <div className="w-60">
            <Logo />
          </div>
          <p className="text-gray-600 w-2/3 ">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <ul className="flex gap-2 items-center justify-start text-xl ">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20 md:w-2/3 ">
          <FooterLinks
            list={["about", "features", "works", "career"]}
            title={"company"}
          />

          <FooterLinks
            list={[
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
            title={"help"}
          />

          <FooterLinks
            list={["Account", "Manage Deliveries", "Orders", "Payments"]}
            title={"FAQ"}
          />

          <FooterLinks
            list={[
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ]}
            title={"RESOURCE"}
          />
        </div>
      </footer>
      <RightCopyFooter />
    </>
  );
}

export default Footer;