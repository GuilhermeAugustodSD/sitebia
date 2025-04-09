'use client'
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../Context/Language';
import './index.scss';
import Image from 'next/image';
import { GoStarFill, GoStar } from "react-icons/go";
import { Fragment } from "react";
import { ImQuotesLeft } from "react-icons/im";
export interface CardTestimonialsProps {
  name: string
  description: string
  company: string
  cargo: string
  grade: number
  picture: string
  link: string
}

export default function CardTestimonials({ name, description, company, cargo, grade, picture, link }: CardTestimonialsProps) {


  const gradeCalculated = grade ?? 0
  const starsFilled = new Array(grade).fill(<GoStarFill color="var(--primary-color)" />)
  const starsEmpty = new Array(5 - gradeCalculated).fill(<GoStar color="var(--primary-color)" />)
  const { language } = useLanguage()
  const stars = starsFilled.concat(starsEmpty)
  const maxLength = 250;
  const [isLong, setIsLong] = useState<boolean>()
  const [truncated, setTruncated] = useState<string>()
  const [seeMoreButtom, setSeeMoreButtom] = useState<string>()

  useEffect(() => {
    const isTooLong = description.length > maxLength;
    const seeMoreText = language === 'en' ? 'See more' : 'Ver mais';
    
    setSeeMoreButtom(seeMoreText)
    setIsLong(isTooLong);
    setTruncated(
      isTooLong
        ? description.slice(0, maxLength).trim() + '...'
        : description
    );
  }, [description]);


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

      <p>
        {truncated}
        {isLong && (
          <a
            href={link}
            className="seeMoreInline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {seeMoreButtom}
          </a>
        )}
      </p>
      <div className="infoPerson">
        <Image
          src={picture || '/avatar.png'}
          alt="imagem criada por IA"
          width={50}
          height={50}
        />
        <div className="words">
          <span>{name}</span>
          <small>{company}</small>
        </div>
      </div>
      <div className="absoluteIcon">
        <ImQuotesLeft size={50} color='var(--primary-color)' />
      </div>
    </div>
  );
}
