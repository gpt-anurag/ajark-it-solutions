import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const data = [
  {
    id: 1,
    question: 'What unique skills will I gain from your training programs?',
    answer:
      'Our programs focus on both technical and soft skills, including coding, project management, communication, and problem-solving, tailored to industry demands',
  },
  {
    id: 2,
    question: 'What are the benefits of partnering with your organization?',
    answer:
      'By partnering with us, you gain access to a pool of trained talent ready to contribute, save on recruitment and training costs, and ensure project success through our specialized training and support services',
  },
  {
    id: 3,
    question: 'How will your training help me stand out in the job market?',
    answer:
      'We emphasize hands-on experience and real-world projects, enabling you to build a strong portfolio and gain practical knowledge that employers value',
  },
  {
    id: 4,
    question: 'What measures do you take to ensure the success of the outsourced talent?',
    answer:
      'We conduct regular performance evaluations, provide ongoing training, and maintain open communication to ensure our resources meet and exceed your expectations',
  },
  {
    id: 5,
    question: 'What kind of support will I receive after completing the training?',
    answer:
      'We offer ongoing career support, including job placement assistance, resume reviews, and interview coaching to help you land your desired role',
  },
  {
    id: 6,
    question: 'Can you provide resources for both short-term and long-term projects?',
    answer:
      'Absolutely! We offer flexible solutions to provide skilled resources for both immediate project needs and ongoing long-term engagements',
  },
  {
    id: 7,
    question: 'What is the cost of your training programs?',
    answer:
      'Program costs vary based on the training offered. We also provide flexible payment options and scholarships for eligible students.',
  },
  {
    id: 8,
    question: 'Do you customize your services to fit our specific industry requirements?',
    answer:
      'We work closely with you to understand your needs and tailor our training programs and talent solutions to align with your industry standards and objectives',
  }
]

const FAQ = () => {
  return (
    <div className='text-black bg-[#f7f7f7]'>
      <div className='w-2/3 2xl:w-4/5 my-0 mx-auto py-16 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <span className='text-black/30 font-bold uppercase'>
            Frequently Asked Questions
          </span>
          <div className='w-40 h-[0.5px] bg-red-600'></div>
        </div>
        <h2 className='text-4xl mb-8'>
          <span className='font-bold'>ASK US </span>ANYTHING
        </h2>
        <div className='text-red-400 font-bold'>Students</div>
        <div className='text-green-400 font-bold'>Clients</div>
        <div className='grid grid-cols-2 gap-8 gap-x-24'>
          {data.map((item) => {
            return (
              <Accordion
                key={item.id}
                type='single'
                collapsible
                className={`border py-2 px-4 rounded shadow bg-white ${item.id % 2 === 0 ? 'bg-green-400' : 'bg-red-400'}`}
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
