import React from 'react';
import './index.scss';
import Image from 'next/image';
import { GoStarFill, GoStar } from "react-icons/go";
import { Fragment } from "react";
import { PiQuotes } from "react-icons/pi";
import { ImQuotesLeft } from "react-icons/im";
export interface CardTestimonialsProps {
  name: string
  description: string
  company: string
  cargo: string
  grade: number
  picture: string
}

export default function CardTestimonials({ name, description, company, cargo, grade, picture }: CardTestimonialsProps) {


  const gradeCalculated = grade ?? 0
  const starsFilled = new Array(grade).fill(<GoStarFill color="var(--primary-color)" />)
  const starsEmpty = new Array(5 - gradeCalculated).fill(<GoStar color="var(--primary-color)" />)

  const stars = starsFilled.concat(starsEmpty)

  return (
    <div className='cardTestimonials'>
      {
        grade &&
        <div className='containerStars'>
          {
            stars.map((star, idx) => (
              <Fragment key={`start-${idx}`}>{star}</Fragment>
            ))
          }
        </div>
      }
      <p>{description}</p>
      <div className="infoPerson">
        <Image src={picture} alt='imagem criada por IA' width={50} height={50}/>
        <div className="words">
          <span>{name}</span>
          <small>{cargo} - {company}</small>
        </div>
      </div>
      <div className="absoluteIcon">
        <ImQuotesLeft size={50} color='var(--primary-color)'/>
      </div>
    </div>
  );
}
