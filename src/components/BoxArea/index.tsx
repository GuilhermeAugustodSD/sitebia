'use client'
import { Areas } from '@/types/dataTypes';
import './index.scss';
import { MdOutlineBusiness } from "react-icons/md";


export default function BoxArea({ title, hat, icon }: Areas) {

  return (
    <div className="boxArea">
      {icon}
      {/* <icon size={40} color='var(--primary-color)'/> */}
      <div className="words">
        <small>{hat}</small>
        <span>{title}</span>
      </div>
    </div>
  );
}
