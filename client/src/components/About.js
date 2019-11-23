import React from "react";
import { Link } from 'react-router-dom';
import '../css/Style.css';

const Header = props => {

  return (
    <section id='about-section'>
            <div className='box bg-blue'>
                <i class="fas fa-cogs fa-3x"></i>
                <h3>Backend Development</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Java</li>
                </ul>
            </div>
            <div className='box bg-brown text-secondary'>
                <i class="fas fa-code fa-3x"></i>
                <h3>Frontend Development</h3>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>&nbsp;</li>
                    
                </ul>
            </div>
            <div className='box bg-blue'>
                <i class="fas fa-sitemap fa-3x"></i>
                <h3>DevOps | CI/CD | Testing</h3>
                <ul>
                    <li>Amazon Web Services</li>
                    <li>GitLab CI</li>
                    <li>Bamboo</li>
                    <li>Selenium</li>
                    <li>Docker</li>
                    
                </ul>
            </div>
            <div className="clr"></div>

        
    </section>
  );
};

export default Header;
