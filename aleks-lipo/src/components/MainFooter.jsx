import { Footer } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaInstagram, FaFacebook } from "react-icons/fa";

function MainFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Aleks Lipo ™" year={2024} />
      <Footer.LinkGroup className="flex flex-col gap-2 md:flex-row    md:mt-[0em] mt-[1em] ">
        <Footer.Link href="#">
          <div className="flex gap-1 ml-[3em] md:ml-[0em]">
            <MdEmail size={20} />
            alekslipo125@gmail.com
          </div>
        </Footer.Link>
        <Footer.Link href="#">
          <div className="flex gap-1 ml-[3em] md:ml-[0em]">
            <FaPhoneAlt size={20} />
            +355 69 601 6716
          </div>
        </Footer.Link>
        <div className="flex justify-center">
          <Footer.Link href="https://www.instagram.com/aleks.lipo/">
            <FaFacebook size={20} />
          </Footer.Link>
          <Footer.Link href="https://www.facebook.com/aleks.lipo.9">
            <FaInstagram size={20} />
          </Footer.Link>
        </div>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default MainFooter;
