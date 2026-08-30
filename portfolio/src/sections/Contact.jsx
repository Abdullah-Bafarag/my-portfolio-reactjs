import React from 'react';
import { SectionHeader } from '../components/SectionHeader'
import { MessageCard } from '../components/MessageCard'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa"; 
import { ContactForm } from '../components/ContactForm';

const Contact = () => {

  const ContactData = [
    {
      id: 1,
      icon: CiMail,
      title: 'Email',
      info: 'Mail me',
      link: 'mailto: bbafarage100@gamil.com'
    },
    {
      id: 2,
      icon: FaWhatsapp,
      title: 'Whatsapp',
      info: '00967775003583',
      link: 'https://api.whatsapp.com/send/?phone=00967775003583'
    },
    // {
    //   id: 3,
    //   icon: FaTelegramPlane,
    //   title: 'Telegram',
    //   info: '@username', // ضع اسم المستخدم أو رقم هاتفك هنا
    //   link: 'https://t.me/username' // استبدل username بيوزر حسابك في تليجرام
    // }
  ]  

  return (
    <section id='contact'>
      <SectionHeader
        subtitle="Get in touch"
        title="Contact Me"
      />

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 sm:px-8 md:px-16'>
        {/*  */}
        <div className='justify-self-center w-full max-w-xs sm:max-w-sm rounded-2xl col-span-2'>
          {ContactData.map((contact) => {
            return (
              <MessageCard
                key={contact.id}
                icon={contact.icon}
                title={contact.title}
                subtitle={contact.info}
                href={contact.link}
              />
            );
          })}
        </div>

        {/*  */}
        <div className='justify-self-center w-full max-w-xs sm:max-w-sm rounded-2xl'>
          <ContactForm  />
          
        </div>
      </div>

    </section>
  )
}

export default Contact