import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin />
        </div>

        <div>
            <FaFacebookF />
        </div>

        <div>
            <BsInstagram />
        </div>

        <div>
            <BsGithub />
        </div>
      
    </div>
  )
}

export default SocialMedia;
