import { Footer } from "flowbite-react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

function MainFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Aleks Lipo ™" year={2024} />
      <Footer.LinkGroup className="flex flex-row items-center ">
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
