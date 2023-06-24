"use client"
import './styles/home.scss'
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import HomePage from './components/Home';

export default function Home() {

  return (
    <div className='h-screen flex flex-column overflow-hidden'>
      <div style={{ height: '90%' }}>
        <HomePage />
      </div>
    </div>
  );
}
