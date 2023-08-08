import { LuCalendarCheck2 } from "react-icons/lu";
import { BiSolidUserPin } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Informations() {
  return (
    <main>
      <div></div>
      <div>
        <div><h3>Robert Santos</h3></div>
        <div>
          <p>
            <span><LuCalendarCheck2 />:</span>
            {' '}
            <span>23 anos</span>
          </p>
          <p>
            <span><BiSolidUserPin />:</span>
            {' '}
            <span>Desenvolvedor Web FullStack</span>
          </p>
          <p>
            <span><BsGithub />:</span>
            {' '}
            <span>gitHub link</span>
          </p>
          <p>
            <span><BsLinkedin />:</span>
            {' '}
            <span>Linkedin link</span>
          </p>
        </div>
      </div>
    </main>
  );
}