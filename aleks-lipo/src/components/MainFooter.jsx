import { Footer } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaInstagram, FaFacebook } from "react-icons/fa";

function MainFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Aleks Lipo ™" year={2024} />
      <Footer.LinkGroup className="flex flex-row items-center justify-center md:mt-[0em] mt-[1em] ">
        <Footer.Link href="#">
          <MdEmail size={20} />
        </Footer.Link>
        <Footer.Link href="#">alekslipo125@gmail.com</Footer.Link>
        <Footer.Link href="#">
          <FaPhoneAlt size={20} />
        </Footer.Link>
        <Footer.Link href="#">+355 69 601 6716</Footer.Link>
        <Footer.Link href="#">
          <FaFacebook size={20} />
        </Footer.Link>
        <Footer.Link href="#">
          <FaInstagram size={20} />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default MainFooter;
