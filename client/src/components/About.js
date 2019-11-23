import React from "react";
import { Link } from 'react-router-dom';
import '../css/Style.css';

const Header = props => {

  return (
    <section id='about-section'>
            <div className='box bg-blue'>
                <i class="fas fa-cogs fa-3x"></i>
                <h3>Backend Development</h3>
            </div>
            <div className='box bg-brown text-secondary'>
                <i class="fas fa-code fa-3x"></i>
                <h3>Frontend Development</h3>
            </div>
            <div className='box bg-blue'>
                <i class="fas fa-sitemap fa-3x"></i>
                <h3>DevOps | CI/CD | Testing</h3>
            </div>

        
    </section>
  );
};

export default Header;
