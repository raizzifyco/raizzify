import Image from "next/image";
import Whatsapp from "../../../public/images/download/images (1).png";
import Linkdin from "../../../public/images/download/linkdin.svg";
import Gmail from "../../../public/images/download/gmail_logo-100758589-orig-2.png";

const DownloadComp = () => {
  return (
    <div className="flex flex-wrap justify-center  md:mb-10 mb-5">
      <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center items-center md:gap-2 md:py-3 ">
        <a
         href="https://wa.me/9340151678"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-110"
        >
          <Image
            alt="Whatsapp"
            src={Whatsapp}
            width={130}
            loading="lazy"
            
          />
        </a>
        <a
         href="mailto:nikhil.raizada@raizzify.com"
    className="transition transform hover:scale-110"
        >
          <Image
            alt="Gmail"
            src={Gmail}
            width={180}
            loading="lazy"
            
          />
        </a>

        <a
          href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A103733256&keywords=raizzify&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=5ed5940c-29c5-4f64-8f42-0084909f22df&sid=~%40f&spellCorrectionEnabled=true"
          target="_blank"
        >
          <Image
            alt="Linkdin"
            src={Linkdin}
            width={130}
            className="hover:scale-110 transition-transform "
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadComp;
