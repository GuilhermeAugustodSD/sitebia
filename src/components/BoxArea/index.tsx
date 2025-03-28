'use client'
import { Areas } from '@/types/dataTypes';
import './index.scss';
import Link from 'next/link';
import { MdOutlineBusiness } from "react-icons/md";


export default function BoxArea({ title, hat, icon, slug }: Areas) {

  return (
    <div className="boxArea">
      <Link key={slug} href={`/atuacao${slug}`}>
        {icon}
        <div className="words">
          <small>{hat}</small>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}
