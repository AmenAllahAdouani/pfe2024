import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Days = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 01</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row">
              <div className="timeline-container">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 02</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-row">
              <div className="timeline-container">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 03</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-row">
              <div className="timeline-container">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="rounded-xl shadow-md pr-2 mb-4">
          <AccordionTrigger>
            <div className="flex flex-col items-start pl-8">
              <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 04</h1>
              <p className="font-bold text-s sm:text-xs pl-1 sm:pl-8 pt-2">Check out the day plan below to see what you'll get up. Feel free to personalize this offer.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <div className="flex flex-row">
              <div className="timeline-container">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                      <TimelineConnector style={{ backgroundColor: '#fb923c', width: '8px', opacity: '0.8' }}/>
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#F59E0B' }} />
                    </TimelineSeparator>
                    <TimelineContent><h1 className="font-bold">Meeting point</h1></TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div> 
  )
}

export default Days