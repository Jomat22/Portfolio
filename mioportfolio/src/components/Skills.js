import React from 'react';
import { FaGit, FaGithub, FaReact, FaJs, FaHtml5, FaCss3, FaPhp, FaDocker,FaPython,FaJava,} from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills">
       <h3>Competenze</h3>
          <ul>
            <li>JavaScript<FaJs/>, React<FaReact/>, HTML<FaHtml5/>, CSS<FaCss3/></li>
            <li>MySql, MongoDB, PHP<FaPhp/></li>
            <li>Java<FaJava/>, Python<FaPython/>, C++</li>
            <li>Git<FaGit/>, GitHub<FaGithub/>, Docker<FaDocker/></li>
            <li>Django, Spring,</li>
            <li>API,Json,XML</li>

          </ul>
    </section>
  );
}

export default Skills;